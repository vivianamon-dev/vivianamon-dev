import { Component, ViewChild, ElementRef } from '@angular/core';
import { Subscription, interval } from 'rxjs';
import { MongoService } from 'src/app/services/mongo.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  private elementos: any;
  led1: number = 0;
  led2: number = 0;
  servo: number = 0;
  private datos: any;
  checkboxStates: any = {};
  temp: any[] = [];
  temperatura: number = 32;
  hum: any[] = [];
  humedad: number = 20;
  lz: any[] = [];
  luz: number = 110;
  intervalo!: Subscription;
  @ViewChild('sun') sun!: ElementRef;
  private ultimaPosicionT: number = 0;
  @ViewChild('background', { static: false }) backgroundRef!: ElementRef;
  @ViewChild('sea', { static: false }) seaRef!: ElementRef;
  @ViewChild('windowLeft', { static: false }) winRef!: ElementRef;
  @ViewChild('windowRigth', { static: false }) windRef!: ElementRef;
  @ViewChild('window', { static: false }) windoRef!: ElementRef;
  @ViewChild('tileT', { static: false }) tileTRef!: ElementRef;
  @ViewChild('tileB', { static: false }) tileBRef!: ElementRef;
  @ViewChild('door', { static: false }) doorBRef!: ElementRef;
  @ViewChild('clouds', { static: false }) cloudsRef!: ElementRef;
  constructor(private mongo: MongoService) { }

  ngOnInit() {
    this.intervalo = interval(5000).subscribe(() => {
      this.obtenerDatos();
      this.pintarTemperatura(this.temperatura);
      this.pintarTemperaturaH(this.humedad);
      this.background();
      this.obtenerElementos();
    });
  }


  obtenerDatos() {
    this.mongo.getDatos().subscribe((datos: any[]) => {
      this.temp = datos.filter(dato => dato.elemento === 'Temperatura');
      if (this.temp.length > 0) {
        const ultimoRegistro = this.temp.pop();
        this.temperatura = ultimoRegistro.valor;

        console.log(this.temperatura);
      } else {
        console.log('No hay datos de temperatura disponibles.');
      }

      this.hum = datos.filter(dato => dato.elemento === 'Humedad');
      if (this.hum.length > 0) {
        const ultimoRegistroH = this.hum.pop();
        this.humedad =ultimoRegistroH.valor;
        console.log(this.humedad);
      } else {
        console.log('No hay datos de temperatura disponibles.');
      }

      this.lz = datos.filter(dato => dato.elemento === 'luminosidad');
      if (this.lz.length > 0) {
        const ultimoRegistroL = this.lz.pop();
        this.luz = ultimoRegistroL.valor;
        console.log(this.luz);
      } else {
        console.log('No hay datos de temperatura disponibles.');
      }

    });
  }

  pintarTemperatura(temp: number) {
    console.log("temp:" + temp);
    const temperature = document.getElementById("temperature") as HTMLElement;
    temperature.style.height = ((temp - 11) / (40 - 11) * 100) + "%";
    temperature.dataset['value'] = temp + "°C";

  }
  pintarTemperaturaH(hum: number) {
    console.log("hum:" + hum);
    const temperatureH = document.getElementById("temperatureH") as HTMLElement;
    temperatureH.style.height = ((hum - 11) / (100 - 11) * 100) + "%";
    temperatureH.dataset['value'] = hum + "g/m3";

  }
  background() {
    //Noche estrellada
    if (this.temperatura > 30 && this.luz >= 200 && this.humedad < 30) {
      const fondo = this.backgroundRef.nativeElement;
      const mar = this.seaRef.nativeElement;
      const cloud = this.cloudsRef.nativeElement;
      cloud.classList.remove('clouds')
      fondo.classList.remove('background');
      fondo.classList.add('backgroundN');
      fondo.classList.remove('backgroundLl');
      mar.classList.remove('sea');
      mar.classList.add('seaN');
      fondo.classList.remove('seaLl');
      this.checkboxStates = {
        led1: 1,
        led2: 1,
      };
      this.ledA();
      this.ledV();
      this.actualizarStatusDato(1,1);
      this.actualizarStatusDato(1,2);
    }
    //dia soleado
    else if (this.temperatura >= 30 && this.luz <= 150) {
      const fondo = this.backgroundRef.nativeElement;
      const mar = this.seaRef.nativeElement;
      const cloud = this.cloudsRef.nativeElement;
      cloud.classList.remove('clouds')
      fondo.classList.remove('backgroundN');
      fondo.classList.add('background');
      mar.classList.remove('seaN');
      mar.classList.add('sea');
    }
    //noche lluviosa
    else if(this.humedad >50 && this.temperatura<30 && this.luz>300){
      const fondo = this.backgroundRef.nativeElement;
      const mar = this.seaRef.nativeElement;
      const cloud = this.cloudsRef.nativeElement;
      cloud.classList.add('clouds')
      fondo.classList.remove('background');
      fondo.classList.add('backgroundN');
      mar.classList.remove('sea');
      mar.classList.add('seaN');
      this.checkboxStates = {
        led1: 1,
        led2: 1,
      };
      this.ledA();
      this.ledV();
      this.actualizarStatusDato(1,1);
      this.actualizarStatusDato(1,2);
    }
    //dia lluvioso
    else if(this.humedad >50 && this.temperatura<30 && this.luz<180){
      const fondo = this.backgroundRef.nativeElement;
      const mar = this.seaRef.nativeElement;
      const cloud = this.cloudsRef.nativeElement;
      cloud.classList.add('clouds')
      fondo.classList.remove('backgroundN');
      fondo.classList.remove('backgroundLl');
      fondo.classList.add('backgroundLl');
      mar.classList.remove('seaN');
      mar.classList.add('seaLl');
    //dia nublado
    }
    else if(this.humedad <30 && this.temperatura<30 && this.luz<180){
      const fondo = this.backgroundRef.nativeElement;
      const mar = this.seaRef.nativeElement;
      const cloud = this.cloudsRef.nativeElement;
      cloud.classList.add('clouds')
      fondo.classList.remove('backgroundN');
      fondo.classList.remove('background');
      fondo.classList.add('backgroundLl');
      mar.classList.remove('seaN');
      mar.classList.add('seaLl');
    }
    //noche nublada
    else if(this.humedad <30 && this.temperatura<30 && this.luz>200){
      const fondo = this.backgroundRef.nativeElement;
      const mar = this.seaRef.nativeElement;
      const cloud = this.cloudsRef.nativeElement;
      cloud.classList.add('clouds')
      fondo.classList.remove('background');
      fondo.classList.add('backgroundN');
      fondo.classList.remove('backgroundLl');
      mar.classList.add('seaLl');
      mar.classList.remove('sea');
      mar.classList.remove('seaN');
      this.checkboxStates = {
        led1: 1,
        led2: 1,
      };
      this.ledA();
      this.ledV();
      this.actualizarStatusDato(1,1);
      this.actualizarStatusDato(1,2);
    }
  }
  handleCheckboxChange(event: any, id: string) {
    this.checkboxStates[id] = event.target.checked ? 1 : 0;
    const status = this.checkboxStates[id];

    console.log(`Checkbox ${id} is checked: ${this.checkboxStates[id]}`);
    console.log(this.checkboxStates[id]);
    if (this.checkboxStates[id] == true) {
      if (id == "1") {
        this.ledA();
        const status = 1;
        this.actualizarStatusDato(status, id);
      }
      if (id == "2") {
        this.ledV();
        const status = 1;
        this.actualizarStatusDato(status, id);
      }

    } else {
      if (id == "1") {
        const ledV = this.winRef.nativeElement;
        const ledV1 = this.windRef.nativeElement;
        const ven =this.windoRef.nativeElement;
        ledV.classList.remove('window-left1');
        ledV.classList.add('window-left');
        ledV1.classList.remove('window-right1');
        ledV1.classList.add('window-right');
        ven.classList.remove('window1');
        ven.classList.add('window');
        const status = 0;
        this.actualizarStatusDato(status, id);
      }
      if(id == "2"){
        const tilT = this.tileTRef.nativeElement;
        const tilB = this.tileBRef.nativeElement;
        tilT.classList.remove('tile-top1');
        tilT.classList.add('tile-top');
        tilB.classList.remove('tile-bot1');
        tilB.classList.add('tile-bot');
        const status = 0;
        this.actualizarStatusDato(status, id);
      }

    }
    //this.isChecked = checked;
    //console.log('El estado del checkbox es:', this.isChecked);
    /*if(this.isChecked == true){
      const id='65dd7e4ab742b364c43fbbed';
      const status= 1;
      this.actualizarStatusDato(status,id);
    }else{
      const id='65dd7e4ab742b364c43fbbed';
      const status= 0;
      this.actualizarStatusDato(status,id);
    }*/
  }
  handleCheckboxChangeS(event: any, id: string) {
    this.checkboxStates[id] = event.target.checked ? 1 : 0;
    const status = this.checkboxStates[id];

    console.log(`Checkbox ${id} is checked: ${this.checkboxStates[id]}`);
    console.log(this.checkboxStates[id]);
    if (this.checkboxStates[id] == true) {
      const door = this.doorBRef.nativeElement;
      door.classList.remove('true-door');
      door.classList.add('true-door1');
      const status = 90;
      this.actualizarStatusDato(status, id);
    } else {
      const door = this.doorBRef.nativeElement;
      door.classList.remove('true-door1');
      door.classList.add('true-door');
      const status = 0;
      this.actualizarStatusDato(status, id);
    }
    //this.isChecked = checked;
    //console.log('El estado del checkbox es:', this.isChecked);
    /*if(this.isChecked == true){
      const id='65dd7e4ab742b364c43fbbed';
      const status= 1;
      this.actualizarStatusDato(status,id);
    }else{
      const id='65dd7e4ab742b364c43fbbed';
      const status= 0;
      this.actualizarStatusDato(status,id);
    }*/
  }
  actualizarStatusDato(valor: any, id: any) {
    const idElemento = id;
    const nuevoStatusDato = valor;
    const body = {
      statusdato: nuevoStatusDato
    };
    this.mongo.updateElemento(idElemento, body).subscribe(
      (response) => {
        console.log('Elemento actualizado correctamente:', response);
        this.obtenerElementos();
      },
      (error) => {
        console.error('Error al actualizar el elemento:', error);
      }
    );
  }
  obtenerElementos() {
    this.mongo.getElementos().subscribe(
      (data: any) => {
        this.elementos = data;
        this.checkboxStates = {
          led1: data.led1,
          led2: data.led2,
        };
        console.log('Elementos obtenidos:', data);
      },
      (error) => {
        console.error('Error al obtener elementos:', error);
      }
    );
    this.mongo.getDatos().subscribe(
      (data: any) => {
        this.datos = data;
        console.log('Datos encontrados', data);
      },
      (error) => {
        console.error('Error al obtener los datos:', error);
      }
    );
  }
  ledA(){
    const ledA = this.winRef.nativeElement;
        const ledA1 = this.windRef.nativeElement;
        const ven =this.windoRef.nativeElement;
        ledA.classList.remove('window-left');
        ledA.classList.add('window-left1');
        ledA1.classList.remove('window-right');
        ledA1.classList.add('window-right1');
        ven.classList.remove('window');
        ven.classList.add('window1');
  }
  ledV(){
    const tilT = this.tileTRef.nativeElement;
        const tilB = this.tileBRef.nativeElement;
        tilT.classList.remove('tile-top');
        tilT.classList.add('tile-top1');
        tilB.classList.remove('tile-bot');
        tilB.classList.add('tile-bot1');
  }
}
