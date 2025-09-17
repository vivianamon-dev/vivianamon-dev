import { Component, inject } from '@angular/core';
import { NavBarEduMindComponent } from "../nav-bar-edu-mind/nav-bar-edu-mind.component";
import { FooterEduMindComponent } from "../footer-edu-mind/footer-edu-mind.component";
import { faUser,  } from '@fortawesome/free-solid-svg-icons';
import { IconProp } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { TranslateModule, TranslateService } from '@ngx-translate/core';
import { SocialMedialEduMindComponent } from "../conponent/social-medial-edu-mind/social-medial-edu-mind.component";

@Component({
  selector: 'app-contact-edu-mind',
  standalone: true,
  imports: [NavBarEduMindComponent, FooterEduMindComponent, FontAwesomeModule, TranslateModule, SocialMedialEduMindComponent],
  templateUrl: './contact-edu-mind.component.html',
  styleUrl: './contact-edu-mind.component.css'
})
export class ContactEduMindComponent {
  faUser: IconProp = faUser as IconProp;  // Asignar faUser como IconProp
  // Inyecta el servicio TranslateService
  translate: TranslateService = inject(TranslateService);

  // Método para cambiar el idioma
  changeLanguage(lang: string): void {
    this.translate.use(lang);  // Cambia el idioma usando el servicio
  }

}
