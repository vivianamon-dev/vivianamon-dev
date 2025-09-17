import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { TranslateModule } from '@ngx-translate/core';
import { LanguageService } from '../../../core/services/language.service';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons';
import { IconProp } from '@fortawesome/fontawesome-svg-core';
import { RecaptchaModule, RecaptchaFormsModule } from 'ng-recaptcha';
declare var bootstrap: any;

@Component({
  selector: 'app-register-vita-edu',
  standalone: true,
  imports: [
    CommonModule, 
    ReactiveFormsModule, 
    TranslateModule, 
    FontAwesomeModule,
    RecaptchaModule,
    RecaptchaFormsModule
  ],
  templateUrl: './register-vita-edu.component.html',
  styleUrl: './register-vita-edu.component.css'
})
export class RegisterVitaEduComponent {
  registerForm: FormGroup;
  currentStep = 1;
  showPassword = false;
  showConfirmPassword = false;
  faEye: IconProp = faEye as IconProp;
  faEyeSlash: IconProp = faEyeSlash as IconProp;

  constructor(
    private fb: FormBuilder,
    private languageService: LanguageService
  ) {
    this.registerForm = this.fb.group({
      // Sección 1
      name: ['', Validators.required],
      lastName: ['', Validators.required],
      age: ['', [Validators.required, Validators.min(16), Validators.max(100)]],
      
      // Sección 2
      university: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      career: ['', Validators.required],
      
      // Sección 3
      password: ['', [
        Validators.required, 
        Validators.minLength(8),
        Validators.pattern(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/)
      ]],
      confirmPassword: ['', Validators.required],
      recaptcha: ['', Validators.required]
    }, {
      validators: this.passwordMatchValidator
    });
  }

  passwordMatchValidator(g: FormGroup) {
    return g.get('password')?.value === g.get('confirmPassword')?.value
      ? null : {'mismatch': true};
  }

  nextStep() {
    if (this.isCurrentStepValid()) {
      this.currentStep++;
    }
  }

  previousStep() {
    this.currentStep--;
  }

  isCurrentStepValid(): boolean {
    const controls = {
      1: ['name', 'lastName', 'age'],
      2: ['university', 'email', 'career'],
      3: ['password', 'confirmPassword', 'recaptcha']
    };

    return controls[this.currentStep as keyof typeof controls].every(
      controlName => this.registerForm.get(controlName)?.valid
    );
  }

  togglePasswordVisibility() {
    this.showPassword = !this.showPassword;
  }

  toggleConfirmPasswordVisibility() {
    this.showConfirmPassword = !this.showConfirmPassword;
  }

  onSubmit() {
    if (this.registerForm.valid) {
      console.log(this.registerForm.value);
      // Aquí iría tu lógica de registro
    }
  }

  cambiarALogin(event: Event) {
    event.preventDefault();
    const registerModal = bootstrap.Modal.getInstance(document.getElementById('registerModal'));
    registerModal.hide();
    const loginModal = new bootstrap.Modal(document.getElementById('loginModal'));
    loginModal.show();
  }

  changeLanguage(lang: string, event?: Event) {
    if (event) {
      event.preventDefault();
    }
    this.languageService.changeLanguage(lang);
  }
}
