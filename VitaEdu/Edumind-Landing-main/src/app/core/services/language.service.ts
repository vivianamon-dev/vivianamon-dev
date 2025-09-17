import { Injectable } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Injectable({
  providedIn: 'root'
})
export class LanguageService {
  constructor(private translate: TranslateService) {
    translate.addLangs(['es', 'en']);
    translate.setDefaultLang('es');
    
    try {
      const savedLanguage = localStorage.getItem('language') || 'es';
      if (['es', 'en'].includes(savedLanguage)) {
        translate.use(savedLanguage);
      }
    } catch (e) {
      console.warn('localStorage no está disponible');
    }
  }

  changeLanguage(lang: string): void {
    this.translate.use(lang);
    try {
      localStorage.setItem('language', lang);
    } catch (e) {
      console.warn('localStorage no está disponible');
    }
  }
} 