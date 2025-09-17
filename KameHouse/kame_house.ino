#include <DHT.h>
#include <DHT_U.h>

#include <Servo.h>
#include "WiFiEsp.h"
#include <ArduinoJson.h>
#include "SoftwareSerial.h"

SoftwareSerial Serial1(10, 11);  // RX, TX
char ssid[] = "Alumnos-UTCV";
char pass[] = "UTCV2022$";
//char ssid[] = "OPPO";
//char pass[] = "h4ddbcip";
//char ssid[] = "TIITIESP";        // Mi SSID
//char pass[] = "T117135p";       // Mi contraseña de red

// Configuración de los pines
Servo servo;
const int SENSOR = 8;
int foto = 0;
const int LED1 = 6;
const int LED2 = 7;
const int PINSERVO = 9;
const int PULSOMIN = 1500;
const int PULSOMAX = 2500;

int temp;
int humedad;
int valor;

int servoPos;

DHT dht(SENSOR, DHT11);


// Configuración de WiFi y servidor
WiFiEspClient client;
//const char server[] = "192.168.3.25";  // IP del servidor o en este caso de mi Laptop
const char server[] = "10.0.250.162";
unsigned long lastConnectionTime = 0;
const unsigned long postingInterval = 10000L;  // Intervalo entre peticiones
//servo.attach(PINSERVO, PULSOMIN, PULSOMAX);

void setup() {
  Serial.begin(9600);
  Serial1.begin(9600);
  dht.begin();
  WiFi.init(&Serial1);
  conectarWiFi();

  // Configuración de pines
  pinMode(LED1, OUTPUT);
  pinMode(LED2, OUTPUT);
  pinMode(foto, INPUT);
  servo.attach(PINSERVO, PULSOMIN, PULSOMAX);
}

void loop() {  
  
 
  if (millis() - lastConnectionTime > postingInterval) {
    if (WiFi.status() == WL_CONNECTED) {
      leerDatos();
      httpRequest();
    } else {
      conectarWiFi();
    }
  }


}

void leerDatos() {
  temp = dht.readTemperature ();
  humedad = dht.readHumidity ();
  valor = analogRead(foto);
  Serial.print ("Temperatura: ") ;
  Serial.println (temp) ;
  Serial.print ("Humedad: ");
  Serial.println (humedad);
  Serial.print("Luminusidad: ");
  Serial.println( valor );
}

void conectarWiFi() {
  while (WiFi.status() != WL_CONNECTED) {
    Serial.print("Conectando a SSID: ");
    Serial.println(ssid);
    WiFi.begin(ssid, pass);
    delay(50); //tiempo espera
  }
  Serial.println("Conectado a WiFi");
  printWifiStatus();
}

void httpRequest() {
  Serial.println("Conectando al servidor...");
  client.stop();

  if (client.connect(server, 8080)) {
    String valores = String(temp) + "_" + String(humedad) + "_" + String(valor);
    //client.print("GET /api/elemento HTTP/1.1\r\n");
    client.print("GET /api/save-data/" + valores + " HTTP/1.1\r\n");
    client.println("Host: ");
    client.print(server);
    client.println("Connection: close");
    client.println("");

    // Espera a que la respuesta esta disponible
    while (!client.available()) {
      delay(50);
    }
/*
    // Lee las cabeceras y descarta
    while (client.available()) {
      String line = client.readStringUntil('\n');
      if (line == "\r") {
        break;  // Fin de las cabeceras
      }
    }
*/
    
    // Ignora los caracteres adicionales antes del JSON válido
    while (client.available()) {
      if (client.peek() == '{') {
        break; // Se encontró el comienzo del JSON
      }
      client.read(); // Descarta el carácter
    }

    // Lee el cuerpo de la respuesta (JSON)
    String respuesta = "";
    while (client.available()) {
      respuesta += char(client.read());
    }

    Serial.println("Respuesta recibida:");
    Serial.println(respuesta);

    // Uso de un DynamicJsonDocument
    DynamicJsonDocument doc(512);  // Se debe ajustar en mi caso con 512 por la memoria de mi Arduino
    //StaticJsonDocument<200> doc;
    DeserializationError error = deserializeJson(doc, respuesta);
    if (!error) {
      controlarDispositivos(doc);
    } else {
      Serial.print("Error en deserializar JSON: ");
      Serial.println(error.c_str());
    }

    lastConnectionTime = millis();
  } else {
    Serial.println("Fallo en la conexión");
  }
}

void controlarDispositivos(JsonDocument& doc) {
  // Accediendo al primer elemento del arreglo
  JsonObject obj = doc[0].as<JsonObject>();

  servoPos = doc["servomotor"];
  int foco1 = doc["led1"];
  int foco2 = doc["led2"];
  //int foco3 = doc["led3"];

  // Control de LEDs
  digitalWrite(LED1, foco1 == 1 ? HIGH : LOW);
  digitalWrite(LED2, foco2 == 1 ? HIGH : LOW);
  //digitalWrite(LED3, foco3 == 1 ? HIGH : LOW);

  // Control del servomotor
  servo.write(servoPos);

  Serial.print("foco1: ");
  Serial.println(foco1);

  Serial.print("foco2: ");
  Serial.println(foco2);

  //Serial.print("foco3: ");
  //Serial.println(foco3);

  Serial.print("posicionServo: ");
  Serial.println(servoPos);
}

void printWifiStatus() {
  IPAddress ip = WiFi.localIP();
  Serial.print("IP Address: ");
  Serial.println(ip);
  long rssi = WiFi.RSSI();
  Serial.print("Señal (RSSI):");
  Serial.print(rssi);
  Serial.println(" dBm");
}