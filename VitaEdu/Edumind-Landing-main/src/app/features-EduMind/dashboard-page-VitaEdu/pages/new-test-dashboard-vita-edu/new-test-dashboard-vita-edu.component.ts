import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';
import { 
  faPlus, 
  faEdit, 
  faTrash, 
  faGripVertical,
  faFont,
  faHeading,
  faListUl,
  faAlignLeft,
  faParagraph,
  faQuestionCircle,
  faAngleDown,
  faAngleUp,
  faArrowLeft,
  faSave,
  faPalette,
  faTextHeight,
  faAlignCenter,
  faAlignRight,
  faAlignJustify,  // Add this import
  faBold
} from '@fortawesome/free-solid-svg-icons';
import { Subject } from 'rxjs';
import { debounceTime, distinctUntilChanged } from 'rxjs/operators';

interface StyleOptions {
  color?: string;
  fontFamily?: string;
  fontSize?: string;
  fontWeight?: string;
  textAlign?: 'left' | 'center' | 'right' | 'justify';
}

interface TestQuestion {
  id: number;  // Change from string to number
  type: string;
  content?: string;
  options?: string[];
  optionPoints?: number[];
  points?: number;
  styles?: StyleOptions;
}

@Component({
  selector: 'app-new-test-dashboard-vita-edu',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    FontAwesomeModule
  ],
  templateUrl: './new-test-dashboard-vita-edu.component.html',
  styleUrls: ['./new-test-dashboard-vita-edu.component.css']
})
export class NewTestDashboardVitaEduComponent {
  // Icons
  faPlus = faPlus;
  faEdit = faEdit;
  faTrash = faTrash;
  faGripVertical = faGripVertical;
  faFont = faFont;
  faHeading = faHeading;
  faListUl = faListUl;
  faAlignLeft = faAlignLeft;
  faParagraph = faParagraph;
  faQuestionCircle = faQuestionCircle;
  faAngleDown = faAngleDown;
  faAngleUp = faAngleUp;
  faArrowLeft = faArrowLeft;
  faSave = faSave;
  
  // Add new icons
  faPalette = faPalette;
  faTextHeight = faTextHeight;
  faAlignCenter = faAlignCenter;
  faAlignRight = faAlignRight;
  faAlignJustify = faAlignJustify;  // Add this declaration
  faBold = faBold;

  // Test Data
  testTitle: string = '';
  testQuestions: TestQuestion[] = [];
  currentEditingQuestion: TestQuestion | null = null;

  // Add new Subject for content updates
  private contentUpdate = new Subject<{question: TestQuestion, content: string}>();
  private optionUpdate = new Subject<{question: TestQuestion, optionIndex: number, content: string}>();

  // Add font families
  fontFamilies = [
    'Arial', 'Times New Roman', 'Helvetica', 'Georgia', 'Verdana'
  ];

  // Add font sizes
  fontSizes = [
    '12px', '14px', '16px', '18px', '20px', '24px', '28px', '32px', '36px'
  ];

  // Add font weights
  fontWeights = [
    'normal', 'bold', '300', '400', '500', '600', '700'
  ];

  constructor(private router: Router) {
    // Setup debounce for content updates
    this.contentUpdate.pipe(
      debounceTime(300),
      distinctUntilChanged((prev, curr) => prev.content === curr.content)
    ).subscribe(({question, content}) => {
      question.content = content;
    });

    // Setup debounce for option updates
    this.optionUpdate.pipe(
      debounceTime(300),
      distinctUntilChanged((prev, curr) => 
        prev.question === curr.question && 
        prev.optionIndex === curr.optionIndex && 
        prev.content === curr.content
      )
    ).subscribe(({question, optionIndex, content}) => {
      if (question.options) {
        question.options[optionIndex] = content;
      }
    });
  }

  // Add new method for option updates
  updateOption1(question: TestQuestion, index: number, content: string) {
    this.optionUpdate.next({ question, optionIndex: index, content });
  }

  addQuestion(type: TestQuestion['type']) {
    const newQuestion: TestQuestion = {
      id: this.testQuestions.length + 1,
      type: type,
      content: '',
      options: type === 'multiple' ? [''] : undefined,
      optionPoints: type === 'multiple' ? [0] : undefined,
      points: type === 'open' ? 0 : undefined
    };
    this.testQuestions.push(newQuestion);
    this.currentEditingQuestion = newQuestion;
  }

  addOption(question: TestQuestion) {
    if (question.options) {
      question.options.push('');
      question.optionPoints?.push(0);
    }
  }

  deleteOption(question: TestQuestion, index: number) {
    if (question.options) {
      question.options.splice(index, 1);
      question.optionPoints?.splice(index, 1);
    }
  }

  // Update the deleteQuestion method
  deleteQuestion(id: number) {
    this.testQuestions = this.testQuestions.filter(q => q.id !== id);
    if (this.currentEditingQuestion?.id === id) {
      this.currentEditingQuestion = null;
    }
  }

  editQuestion(question: TestQuestion) {
    this.currentEditingQuestion = question;
  }

  async saveTest() {
    const result = await Swal.fire({
      title: '¿Cómo deseas guardar tu test?',
      text: 'Estás por finalizar tu test',
      icon: 'question',
      showDenyButton: true,
      showCancelButton: true,
      confirmButtonText: 'Publicar',
      denyButtonText: 'Guardar como borrador',
      cancelButtonText: 'Cancelar'
    });

    if (result.isConfirmed || result.isDenied) {
      const status = result.isConfirmed ? 'publicado' : 'guardado como borrador';
      
      await Swal.fire({
        title: '¡Éxito!',
        text: `Tu test ha sido ${status} correctamente`,
        icon: 'success',
        confirmButtonText: 'OK'
      });

      const leaveResult = await Swal.fire({
        title: '¿Qué deseas hacer?',
        text: '¿Deseas abandonar el editor o permanecer?',
        icon: 'question',
        showDenyButton: true,
        confirmButtonText: 'Abandonar',
        denyButtonText: 'Permanecer'
      });

      if (leaveResult.isConfirmed) {
        this.router.navigate(['/dashboard']);
      }
    }
  }

  async returnToDashboard() {
    const result = await Swal.fire({
      title: '¿Estás seguro?',
      text: 'Los cambios no guardados se perderán',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Sí, abandonar',
      cancelButtonText: 'Cancelar'
    });

    if (result.isConfirmed) {
      this.router.navigate(['/dashboard']);
    }
  }

  // Add new method to handle content updates
  updateContent(question: TestQuestion, content: string) {
    if (!question) return;
    this.contentUpdate.next({ question, content });
  }

  // Remove updateOption1 method as it's redundant
  
  // Update the option method (keep only this version)
  updateOption(question: TestQuestion | null, index: number, content: string) {
    if (!question) return;
    this.optionUpdate.next({ question, optionIndex: index, content });
  }
  
  // Update style method with proper typing and null checks
  // Add these new methods
  updateOptionPoints(question: TestQuestion | null, index: number, value: number) {
    if (!question || !question.optionPoints) return;
    question.optionPoints[index] = value;
  }
  
  updatePoints(question: TestQuestion | null, value: number) {
    if (!question) return;
    question.points = value;
  }
  
  toggleDropdown(dropdown: HTMLElement): void {
      // Close all other dropdowns first
      const allDropdowns = document.querySelectorAll('.style-dropdown');
      allDropdowns.forEach(d => {
        if (d !== dropdown) {
          (d as HTMLElement).hidden = true;
        }
      });
      // Toggle the clicked dropdown
      dropdown.hidden = !dropdown.hidden;
    }
  // Move updateStyle method inside the component class
  updateStyle(question: TestQuestion | null, property: keyof StyleOptions, value: string): void {
    if (!question) return;
    if (!question.styles) {
      question.styles = {};
    }
    (question.styles as any)[property] = value;  // Type assertion to avoid strict type checking
  }
}
