import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './componentes/home/home.component';
import { PruebaComponent } from './componentes/prueba/prueba.component';
import { LluviaComponent } from './componentes/lluvia/lluvia.component';
import { NocheComponent } from './componentes/noche/noche.component';
import { NocheLluviaComponent } from './componentes/noche-lluvia/noche-lluvia.component';

const routes: Routes = [
  {
    path:"",
    component:HomeComponent
  },
  {
    path:"prueba",
    component:PruebaComponent
  },
  {
    path:"lluvia-dia",
    component:LluviaComponent
  },
  {
    path:"noche-estrellada",
    component:NocheComponent
  },
  {
    path:"noche-lluviosa",
    component:NocheLluviaComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
