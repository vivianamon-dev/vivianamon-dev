import { Component } from '@angular/core';
import { CargaService } from 'src/app/services/carga.service';

@Component({
  selector: 'app-prueba',
  templateUrl: './prueba.component.html',
  styleUrls: ['./prueba.component.css']
})
export class PruebaComponent {

  constructor(private scrip:CargaService){}

  onInit(){
    this.scrip.Carga(['cielo']);
  }

}
