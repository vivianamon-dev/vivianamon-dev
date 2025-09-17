#include <Servo.h>

Servo servo;

int PinServo = 9;
int Pir = 3;
int Trig = 4;
int Echo = 5;
int LedV = 8;
int LedA = 7;
int LedR = 6;
int PotPeso = A0;
int Pot1 = A1;
int Pot2 = A2;
int PulsoMin = 1500;
int PulsoMax = 2200;
int Distancia;
int Duracion;
int EstadoPir = 0;
int ValorP1;
int PesoMax = 0;
int PesoMin = 0;
int ValorP2;
int ValorMax = 0;
int ValorP;

void setup() {

  servo.attach(PinServo, PulsoMin, PulsoMax);
  pinMode(Trig, OUTPUT);
  pinMode(Echo, INPUT);
  pinMode(LedV, OUTPUT);
  pinMode(LedA, OUTPUT);
  pinMode(LedR, OUTPUT);
  pinMode(Pir, INPUT);
  servo.write(0);
  Serial.begin(9600);
}

void loop() {
  digitalWrite(Trig, HIGH);
  delay(10);
  digitalWrite(Trig, LOW);

  Duracion = pulseIn(Echo, HIGH);
  Distancia = Duracion / 58.2;
  Serial.println(Distancia);

  if(Distancia >=0 && Distancia <= 15){
    digitalWrite(LedV, HIGH);
    digitalWrite(LedA, LOW);
    digitalWrite(LedR, LOW);
  }
  if(Distancia >= 16 && Distancia <= 25){
    digitalWrite(LedV, LOW);
    digitalWrite(LedA, HIGH);
    digitalWrite(LedR, LOW);
  }
  if(Distancia >= 26 && Distancia <= 30){
    digitalWrite(LedV, LOW);
    digitalWrite(LedA, LOW);
    digitalWrite(LedR, HIGH);
  }
  if(Distancia > 31){
    digitalWrite(LedV, LOW);
    digitalWrite(LedA, LOW);
    digitalWrite(LedR, HIGH);
  }

  

  ValorP1 = analogRead(Pot1);
  PesoMin = map(ValorP1, 0, 1023, 180, 100);
  Serial.print("Peso Minimo: ");
  Serial.println(PesoMin);

  ValorP2 = analogRead(Pot2);
  PesoMax = map(ValorP2, 0, 1023, 250, 180);
  Serial.print("Peso Maximo: ");
  Serial.println(PesoMax);

  ValorP = analogRead(PotPeso);
  int valorPotP = map(ValorP,0,1023,0,300);
  Serial.print("Peso: ");
  Serial.println(valorPotP);

  EstadoPir = digitalRead(Pir);
  Serial.print("Movimiento: ");
  Serial.println(EstadoPir);

  if(EstadoPir == HIGH){
    if(valorPotP <= PesoMin){
      servo.write(90);
      Serial.println("Sirviendo");
    }else if(valorPotP >= PesoMax){
      servo.write(0);
      Serial.println("Cerrado");
    }
  }else{
    servo.write(0);
  }

  Serial.println("------------------------");
  delay(700);

}
