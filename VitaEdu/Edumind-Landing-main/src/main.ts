import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { enableProdMode } from '@angular/core';
import { AppComponent } from './app/app.component';
if ((window as any).ENABLE_PROD_MODE) {
  enableProdMode();
}

bootstrapApplication(AppComponent, appConfig)
  .catch((err) => console.error(err));
