import { Component, inject } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faCoffee, faHeart, faUser } from '@fortawesome/free-solid-svg-icons';
import { IconProp } from '@fortawesome/fontawesome-svg-core';
import { TranslateModule, TranslateService } from '@ngx-translate/core';
import { Router } from '@angular/router';
import { LoginVitaEduComponent } from '../../auth-VitaEdu/login-vita-edu/login-vita-edu.component';
import { RegisterVitaEduComponent } from '../../auth-VitaEdu/register-vita-edu/register-vita-edu.component';
import { LanguageService } from '../../../core/services/language.service';
declare var bootstrap: any;

@Component({
  selector: 'app-nav-bar-edu-mind',
  standalone: true,
  imports: [FontAwesomeModule, TranslateModule, LoginVitaEduComponent, RegisterVitaEduComponent],
  templateUrl: './nav-bar-edu-mind.component.html',
  styleUrls: ['./nav-bar-edu-mind.component.css']
})
export class NavBarEduMindComponent {
  faUser: IconProp = faUser as IconProp;  // Asignar faUser como IconProp

  // Inyectamos TranslateService
  translate: TranslateService = inject(TranslateService);

  constructor(
    private router: Router,
    private languageService: LanguageService
  ) {}

  // Método para cambiar el idioma
  translateText(lang: string) {
    this.languageService.changeLanguage(lang);
  }

  navegarALogin() {
    console.log('Intentando navegar al dashboard...');
    this.router.navigate(['/auth/login-vita-edu'])
      .then(() => console.log('Navegación exitosa'))
      .catch(err => console.error('Error en la navegación:', err));
  }

  abrirModal() {
    const modal = new bootstrap.Modal(document.getElementById('loginModal'));
    modal.show();
  }
}
