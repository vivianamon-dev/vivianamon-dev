import { Component, CUSTOM_ELEMENTS_SCHEMA, inject } from '@angular/core';
import { NavBarEduMindComponent } from "../nav-bar-edu-mind/nav-bar-edu-mind.component";
import { FooterEduMindComponent } from "../footer-edu-mind/footer-edu-mind.component";
import { faBed, faGraduationCap, faHandHoldingHeart, faUsers } from '@fortawesome/free-solid-svg-icons';
import { IconProp } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { TranslateService, TranslateModule } from '@ngx-translate/core';
import { SocialMedialEduMindComponent } from "../conponent/social-medial-edu-mind/social-medial-edu-mind.component"; // Asegúrate de importar el TranslateModule
import { ScrollRevealDirective } from '../../../shared/directives/scroll-reveal.directive';

declare var bootstrap: any;  // Declara bootstrap globalmente

@Component({
  selector: 'app-home-edu-mind',
  standalone: true,
  imports: [
    NavBarEduMindComponent, 
    FooterEduMindComponent, 
    FontAwesomeModule, 
    TranslateModule, 
    SocialMedialEduMindComponent,
    ScrollRevealDirective
  ],
  templateUrl: './home-edu-mind.component.html',
  schemas: [CUSTOM_ELEMENTS_SCHEMA],  
  styleUrls: ['./home-edu-mind.component.css']
})
export class HomeEduMindComponent {

  // Inicializa los iconos de FontAwesome
  faBed: IconProp = faBed as IconProp;
  faGraduationCap: IconProp = faGraduationCap as IconProp;
  faHandHoldingHeart: IconProp = faHandHoldingHeart as IconProp;
  faUsers: IconProp = faUsers as IconProp;

  // Inyecta el servicio TranslateService
  translate: TranslateService = inject(TranslateService);

  // Método para cambiar el idioma
  changeLanguage(lang: string): void {
    this.translate.use(lang);  // Cambia el idioma usando el servicio
  }

  scrollToFeatures(event: Event) {
    event.preventDefault();
    const featuresSection = document.getElementById('features');
    if (featuresSection) {
        featuresSection.scrollIntoView({ behavior: 'smooth' });
    }
  }
}
