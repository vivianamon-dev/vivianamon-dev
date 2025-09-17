import { Component, inject } from '@angular/core';
import { NavBarEduMindComponent } from "../nav-bar-edu-mind/nav-bar-edu-mind.component";
import { FooterEduMindComponent } from "../footer-edu-mind/footer-edu-mind.component";
import { TranslateModule, TranslateService } from '@ngx-translate/core';
import { SocialMedialEduMindComponent } from "../conponent/social-medial-edu-mind/social-medial-edu-mind.component";
import { ScrollRevealDirective } from '../../../shared/directives/scroll-reveal.directive';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-teem-edu-mind',
  standalone: true,
  imports: [
    CommonModule,
    NavBarEduMindComponent, 
    FooterEduMindComponent, 
    TranslateModule, 
    SocialMedialEduMindComponent,
    ScrollRevealDirective
  ],
  templateUrl: './teem-edu-mind.component.html',
  styleUrl: './teem-edu-mind.component.css'
})
export class TeemEduMindComponent {
  // Inyecta el servicio TranslateService
  translate: TranslateService = inject(TranslateService);
    
  // Método para cambiar el idioma
  changeLanguage(lang: string): void {
    this.translate.use(lang);  // Cambia el idioma usando el servicio
  }
}
