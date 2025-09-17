import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faCoffee } from '@fortawesome/free-solid-svg-icons';
import { SpinerVitaEduComponent } from './features-EduMind/landing-page-EduMind/conponent/spiner-vita-edu/spiner-vita-edu.component';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, FontAwesomeModule, SpinerVitaEduComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  faCoffee = faCoffee;

  title = 'edumind';
}
