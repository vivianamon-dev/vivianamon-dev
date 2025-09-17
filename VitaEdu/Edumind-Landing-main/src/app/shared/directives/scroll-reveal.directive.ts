import { Directive, ElementRef, HostBinding, OnInit, NgZone } from '@angular/core';

@Directive({
  selector: '[scrollReveal]',
  standalone: true
})
export class ScrollRevealDirective implements OnInit {
  @HostBinding('class.reveal') isRevealed = false;

  constructor(
    private elementRef: ElementRef,
    private ngZone: NgZone
  ) {}

  ngOnInit() {
    if (typeof window !== 'undefined') {
      if ('IntersectionObserver' in window) {
        this.createIntersectionObserver();
      } else {
        // Fallback para navegadores que no soportan IntersectionObserver
        this.createScrollListener();
      }
    } else {
      // Si estamos en un entorno sin window (SSR), revelamos el elemento
      this.isRevealed = true;
    }
  }

  private createIntersectionObserver() {
    const options = {
      root: null,
      rootMargin: '0px',
      threshold: 0.1
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          this.ngZone.run(() => {
            this.isRevealed = true;
          });
          observer.unobserve(entry.target);
        }
      });
    }, options);

    observer.observe(this.elementRef.nativeElement);
  }

  private createScrollListener() {
    const element = this.elementRef.nativeElement;
    
    const checkPosition = () => {
      const rect = element.getBoundingClientRect();
      const windowHeight = window.innerHeight || document.documentElement.clientHeight;
      
      if (rect.top <= windowHeight * 0.75) {
        this.ngZone.run(() => {
          this.isRevealed = true;
        });
        window.removeEventListener('scroll', checkPosition);
      }
    };

    window.addEventListener('scroll', checkPosition);
    checkPosition(); // Verificar posición inicial
  }
} 