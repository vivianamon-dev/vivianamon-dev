import { Component, OnInit, PLATFORM_ID, Inject } from '@angular/core';
import { CommonModule, isPlatformBrowser } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';
import { Router, NavigationStart, NavigationEnd, NavigationCancel, NavigationError } from '@angular/router';

@Component({
  selector: 'app-spiner-vita-edu',
  standalone: true,
  imports: [CommonModule, TranslateModule],
  templateUrl: './spiner-vita-edu.component.html',
  styleUrl: './spiner-vita-edu.component.css'
})
export class SpinerVitaEduComponent implements OnInit {
  isLoading = true; // Iniciamos en true para que se muestre al cargar
  private isBrowser: boolean;

  constructor(
    private router: Router,
    @Inject(PLATFORM_ID) platformId: Object
  ) {
    this.isBrowser = isPlatformBrowser(platformId);
    
    if (this.isBrowser) {
      this.showSpinner();

      this.router.events.subscribe(event => {
        if (event instanceof NavigationStart) {
          this.showSpinner();
        } else if (
          event instanceof NavigationEnd ||
          event instanceof NavigationCancel ||
          event instanceof NavigationError
        ) {
          setTimeout(() => {
            this.hideSpinner();
          }, 500);
        }
      });
    }
  }

  ngOnInit(): void {
    if (this.isBrowser) {
      setTimeout(() => {
        this.hideSpinner();
      }, 2000);
    }
  }

  private showSpinner(): void {
    this.isLoading = true;
    if (this.isBrowser && document) {
      document.body.style.overflow = 'hidden'; // Previene el scroll mientras carga
    }
  }

  private hideSpinner(): void {
    this.isLoading = false;
    if (this.isBrowser && document) {
      document.body.style.overflow = ''; // Restaura el scroll
    }
  }
}
