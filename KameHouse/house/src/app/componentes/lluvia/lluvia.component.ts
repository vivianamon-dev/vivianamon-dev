import { Component } from '@angular/core';
import { CargaService } from 'src/app/services/carga.service';

@Component({
  selector: 'app-lluvia',
  templateUrl: './lluvia.component.html',
  styleUrls: ['./lluvia.component.css']
})
export class LluviaComponent {

  constructor(private lluvia: CargaService){
    this.lluvia.Carga(['lluvia']);
  }

  ngOnInit():void{
    this.lluvia.Carga(['lluvia']);
  }

}
