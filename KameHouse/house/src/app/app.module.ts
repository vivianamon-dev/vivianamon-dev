import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './componentes/home/home.component';
import { PruebaComponent } from './componentes/prueba/prueba.component';
import { LluviaComponent } from './componentes/lluvia/lluvia.component';
import { NocheComponent } from './componentes/noche/noche.component';
import { NocheLluviaComponent } from './componentes/noche-lluvia/noche-lluvia.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    PruebaComponent,
    LluviaComponent,
    NocheComponent,
    NocheLluviaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
