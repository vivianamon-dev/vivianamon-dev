import { Component, inject } from '@angular/core';
import { TranslateModule, TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-footer-edu-mind',
  standalone: true,
  imports: [TranslateModule],
  templateUrl: './footer-edu-mind.component.html',
  styleUrl: './footer-edu-mind.component.css'
})
export class FooterEduMindComponent {
  // Inyecta el servicio TranslateService
    translate: TranslateService = inject(TranslateService);
  
    // Método para cambiar el idioma
    changeLanguage(lang: string): void {
      this.translate.use(lang);  // Cambia el idioma usando el servicio
    }
}
