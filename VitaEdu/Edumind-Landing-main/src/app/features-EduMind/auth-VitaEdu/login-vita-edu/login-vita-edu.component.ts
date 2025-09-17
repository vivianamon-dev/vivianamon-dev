import { Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { TranslateService, TranslateModule } from '@ngx-translate/core';
import { LanguageService } from '../../../core/services/language.service';
import { faBed, faGraduationCap, faEyeSlash, faEye } from '@fortawesome/free-solid-svg-icons';
import { IconProp } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { Router } from '@angular/router';
declare var bootstrap: any;

@Component({
  selector: 'app-login-vita-edu',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, TranslateModule, FontAwesomeModule],
  templateUrl: './login-vita-edu.component.html',
  styleUrl: './login-vita-edu.component.css'
})
export class LoginVitaEduComponent implements OnInit {
   // Inicializa los iconos de FontAwesome
   faBed: IconProp = faBed as IconProp;
   faGraduationCap: IconProp = faGraduationCap as IconProp;
   faEyeSlash: IconProp = faEyeSlash as IconProp;
   faEyes: IconProp = faEye as IconProp;
 
  loginForm: FormGroup;
  private router = inject(Router);

  constructor(
    private fb: FormBuilder,
    private languageService: LanguageService
  ) {
    // Configuración inicial del formulario
    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]]
    });
  }

  ngOnInit() {
    // Removemos la lógica del idioma de aquí ya que está en el constructor
  }
  mostrarPassword = false;

  togglePasswordVisibility() {
  this.mostrarPassword = !this.mostrarPassword;
}

  onSubmit() {
    if (this.loginForm.valid) {
      console.log(this.loginForm.value);
      // Aquí iría tu lógica de autenticación
      
      // Una vez autenticado exitosamente, redirigimos al dashboard
      this.router.navigate(['/dashboard/Home-dashboard-vita-edu']);
      
      // Cerrar el modal de login si está abierto
      const loginModal = document.getElementById('loginModal');
      if (loginModal) {
        const modal = bootstrap.Modal.getInstance(loginModal);
        if (modal) {
          modal.hide();
        }
      }
    }
  }

  cambiarARegistro(event: Event) {
    event.preventDefault();
    const loginModal = bootstrap.Modal.getInstance(document.getElementById('loginModal'));
    loginModal.hide();
    const registerModal = new bootstrap.Modal(document.getElementById('registerModal'));
    registerModal.show();
  }

  // Método para cambiar el idioma
  changeLanguage(lang: string, event?: Event): void {
    if (event) {
      event.preventDefault();
    }
    this.languageService.changeLanguage(lang);
  }

  scrollToFeatures(event: Event) {
    event.preventDefault();
    const featuresSection = document.getElementById('features');
    if (featuresSection) {
        featuresSection.scrollIntoView({ behavior: 'smooth' });
    }
  }
}
