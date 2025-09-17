import { ApplicationConfig, importProvidersFrom } from '@angular/core';
import { provideRouter } from '@angular/router';
import { RECAPTCHA_SETTINGS, RecaptchaSettings } from 'ng-recaptcha';

import { routes } from './app.routes';
import { provideClientHydration } from '@angular/platform-browser';
import { HttpClient, HttpClientModule, provideHttpClient, withInterceptorsFromDi } from '@angular/common/http';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { AppModule } from './app.module';
import { AgGridModule } from 'ag-grid-angular';

export function createTranslateLoader(http: HttpClient) {
  return new TranslateHttpLoader(http, '../../../../assets/i18n/', '.json');
}

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes),
    provideClientHydration(),
    importProvidersFrom(
      AppModule,
      AgGridModule,
      [
      TranslateModule.forRoot({
        loader: {
            provide: TranslateLoader,
            useFactory: (createTranslateLoader),
            deps: [HttpClient]
        },
        defaultLanguage: 'es'
    }),
    ]),
    provideHttpClient(withInterceptorsFromDi()),
    {
      provide: RECAPTCHA_SETTINGS,
      useValue: {
        //una vez registre el sitio en google captcha, se le asigna la clave de sitio real
        siteKey: 'TU_CLAVE_DE_SITIO_REAL_AQUÍ',
      } as RecaptchaSettings,
    }
  ],
};
