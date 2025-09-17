import { Component, inject } from '@angular/core';
import { FooterEduMindComponent } from "../footer-edu-mind/footer-edu-mind.component";
import { NavBarEduMindComponent } from "../nav-bar-edu-mind/nav-bar-edu-mind.component";
import Swal from 'sweetalert2';
import { TranslateService } from '@ngx-translate/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-questions-edu-mind',
  standalone: true,
  imports: [FooterEduMindComponent, NavBarEduMindComponent, CommonModule],
  templateUrl: './questions-edu-mind.component.html',
  styleUrls: ['./questions-edu-mind.component.css']
})
export class QuestionsEduMindComponent {
  translate: TranslateService = inject(TranslateService);

  currentQuestionIndex: number = 0;
  testStarted: boolean = false;
  answers: any = {};
  showResults: boolean = false;
  showDescription: boolean = true; // Variable para controlar la visibilidad del párrafo
  showQuestions: boolean = true;
  steps: any[] = []; 

  questions = [
    { question: '¿Has tenido dificultades para conciliar el sueño?', options: ['Estoy muy en desacuerdo', 'No estoy de acuerdo', 'Estoy de acuerdo', 'Estoy muy de acuerdo'], scores: [5, 7.5, 10, 12.5] },
    { question: '¿Has pasado por jaquecas o dolores de cabeza?', options: ['Estoy muy en desacuerdo', 'No estoy de acuerdo', 'Estoy de acuerdo', 'Estoy muy de acuerdo'], scores: [5, 7.5, 10, 12.5] },
    { question: 'A veces tengo temblores (por ejemplo en las manos)', options: ['Estoy muy en desacuerdo', 'No estoy de acuerdo', 'Estoy de acuerdo', 'Estoy muy de acuerdo'], scores: [5, 7.5, 10, 12.5] },
    { question: 'Me enojo con mucha facilidad', options: ['Estoy muy en desacuerdo', 'No estoy de acuerdo', 'Estoy de acuerdo', 'Estoy muy de acuerdo'], scores: [5, 7.5, 10, 12.5] },
    { question: 'Tendencia a no tener interés en realizar actividades escolares', options: ['Estoy muy en desacuerdo', 'No estoy de acuerdo', 'Estoy de acuerdo', 'Estoy muy de acuerdo'], scores: [5, 7.5, 10, 12.5] },
    { question: 'Tendencia a padecer sensaciones de agobio', options: ['Estoy muy en desacuerdo', 'No estoy de acuerdo', 'Estoy de acuerdo', 'Estoy muy de acuerdo'], scores: [5, 7.5, 10, 12.5] }
  ];

  totalScore: number = 0;
  stressLevel: string = '';
  stressMessage: string = '';

  progressBarWidth: number = 0;

  changeLanguage(lang: string): void {
    this.translate.use(lang);
  }

  startTest(): void {
    this.testStarted = true;
    this.showDescription = false; // Ocultar el párrafo al iniciar el test
    this.calculateProgress();
    this.steps = new Array(this.questions.length).fill(null);
  }

  calculateProgress(): void {
    const totalQuestions = this.questions.length;
    const answeredQuestions = this.currentQuestionIndex + 1;
    this.progressBarWidth = (answeredQuestions / totalQuestions) * 100;
  }

  calculateStressLevel(): void {
    this.totalScore = 0;
    Object.keys(this.answers).forEach(key => {
      const questionIndex = parseInt(key.split('-')[1]) - 1;
      const optionIndex = this.questions[questionIndex].options.indexOf(this.answers[key]);
      this.totalScore += this.questions[questionIndex].scores[optionIndex];
    });
  
    if (this.totalScore <= 12) {
      this.stressLevel = 'No existe síntomas de estrés';
      this.stressMessage = 'Tu puntuación indica que no estás experimentando síntomas significativos de estrés. Es importante que sigas prestando atención a tu bienestar y no bajes la guardia. El estrés puede aparecer de manera gradual y a veces es difícil de identificar al principio, por lo que te recomendamos mantener hábitos saludables y estar atento a cualquier cambio en tu estado de ánimo o físico.';
    } else if (this.totalScore <= 24) {
      this.stressLevel = 'Muy poco estrés';
      this.stressMessage = 'Tu puntuación sugiere que estás experimentando muy poco estrés en tu vida. Aunque el estrés no es preocupante en este momento, es fundamental seguir cuidando de tu bienestar emocional y físico. El estrés bajo puede acumularse sin que lo notemos, así que sigue practicando técnicas de relajación y mantén un equilibrio saludable en tu vida diaria.';
    } else if (this.totalScore <= 36) {
      this.stressLevel = 'Estrés leve';
      this.stressMessage = 'Tu puntuación refleja un nivel leve de estrés. Es posible que estés experimentando tensiones o preocupaciones ocasionales. Te sugerimos que consideres estrategias para reducir el estrés, como ejercicios de relajación, meditación, o hablar sobre tus preocupaciones con alguien de confianza. Mantente atento a los síntomas y no dudes en buscar apoyo si el estrés se incrementa.';
    } else if (this.totalScore <= 48) {
      this.stressLevel = 'Estrés medio';
      this.stressMessage = 'Tu puntuación indica un nivel medio de estrés. Es importante reconocer los síntomas que estás experimentando y tomar medidas para gestionarlos antes de que se agraven. Trata de identificar las fuentes de estrés en tu vida y busca maneras de afrontarlas, como organizar mejor tu tiempo o realizar actividades que te relajen, como el ejercicio físico. Si los síntomas persisten, no dudes en buscar apoyo profesional.';
    } else if (this.totalScore <= 60) {
      this.stressLevel = 'Estrés alto';
      this.stressMessage = 'Tu puntuación refleja un nivel alto de estrés. Es fundamental que tomes este resultado en serio. El estrés elevado puede afectar tanto tu salud mental como física. Te recomendamos implementar técnicas efectivas de manejo del estrés, como actividades de relajación, ejercicio regular, y asegurarte de tener suficiente descanso. Además, es importante considerar buscar ayuda profesional si el estrés persiste.';
    } else {
      this.stressLevel = 'Estrés grave';
      this.stressMessage = 'Tu puntuación indica un nivel grave de estrés. Este nivel puede estar afectando significativamente tu bienestar físico y emocional. Te sugerimos que tomes medidas inmediatas para reducir el estrés, tales como buscar apoyo de un profesional, realizar cambios en tu rutina diaria, o practicar técnicas de relajación más intensivas. No ignores estos síntomas, ya que el estrés grave puede tener repercusiones importantes en tu salud.';
    }
  }

  nextQuestion(): void {
    const selectedOption = this.answers[`respuesta-${this.currentQuestionIndex + 1}`];
    if (!selectedOption) {
      Swal.fire({
        title: '¡Respuesta requerida!',
        text: 'Por favor, selecciona una respuesta antes de continuar.',
        icon: 'warning',
        confirmButtonText: 'Aceptar'
      });
    } else {
      if (this.currentQuestionIndex < this.questions.length - 1) {
        this.currentQuestionIndex++;
        this.calculateProgress();
      } else {
        Swal.fire({
          title: '¿Seguro que quieres terminar el test?',
          text: 'Una vez que termines, no podrás modificar tus respuestas.',
          icon: 'warning',
          showCancelButton: true,
          confirmButtonText: 'Sí, terminar',
          cancelButtonText: 'No, seguir'
        }).then((result) => {
          if (result.isConfirmed) {
            this.calculateStressLevel();
            this.showResults = true;
            this.showQuestions = false;
          }
        });
      }
    }
  }

  finishTest(): void {
    window.location.href = '/landing/Test-VitaEdu';
  }

  onOptionChange(event: any, option: string): void {
    const questionId = this.currentQuestionIndex + 1;
    this.answers[`respuesta-${questionId}`] = option;
    this.nextQuestion(); // Avanza automáticamente a la siguiente pregunta
  }

  resetTest(): void {
    this.currentQuestionIndex = 0;
    this.answers = {};
    this.testStarted = true;
    this.showResults = false;
    this.showQuestions = true;
    this.progressBarWidth = 0;
    this.steps = new Array(this.questions.length).fill(null);
  }

  onStepClick(stepIndex: number): void {
    if (stepIndex <= this.currentQuestionIndex) {
      this.currentQuestionIndex = stepIndex;
      this.calculateProgress();
    }
  }
}
