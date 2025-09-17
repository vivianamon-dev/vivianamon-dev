import { Component, inject,  CUSTOM_ELEMENTS_SCHEMA, } from '@angular/core';
import { NavBarEduMindComponent } from "../nav-bar-edu-mind/nav-bar-edu-mind.component";
import { FooterEduMindComponent } from "../footer-edu-mind/footer-edu-mind.component";
import { SocialMedialEduMindComponent } from "../conponent/social-medial-edu-mind/social-medial-edu-mind.component";
import { TranslateModule, TranslateService } from '@ngx-translate/core';
import { CommonModule } from '@angular/common';  // Importa CommonModule
import Swal from 'sweetalert2';
import { faBed, faCheck, faCircleCheck, faGraduationCap, faHandHoldingHeart, faUsers } from '@fortawesome/free-solid-svg-icons';
import { IconProp } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { ScrollRevealDirective } from '../../../shared/directives/scroll-reveal.directive';

@Component({
  selector: 'app-test-edu-mind',
  standalone: true,
  imports: [
    NavBarEduMindComponent,
    FooterEduMindComponent,
    SocialMedialEduMindComponent,
    TranslateModule,
    FontAwesomeModule,
    CommonModule,
    ScrollRevealDirective
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],  
  templateUrl: './test-edu-mind.component.html',
  styleUrls: ['./test-edu-mind.component.css']
})
export class TestEduMindComponent {
  
  faBed: IconProp = faBed as IconProp;
  faCheck: IconProp = faCheck as IconProp;
  faUsers: IconProp = faUsers as IconProp;
  faCircleCheck: IconProp = faCircleCheck as IconProp;



  // Inyecta el servicio TranslateService
  translate: TranslateService = inject(TranslateService);

  // Método para cambiar el idioma
  changeLanguage(lang: string): void {
    this.translate.use(lang);  // Cambia el idioma usando el servicio
  }

  
}
