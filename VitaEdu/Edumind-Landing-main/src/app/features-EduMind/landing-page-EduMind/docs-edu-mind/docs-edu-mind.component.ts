import { Component, inject } from '@angular/core';
import { NavBarEduMindComponent } from "../nav-bar-edu-mind/nav-bar-edu-mind.component";
import { FooterEduMindComponent } from "../footer-edu-mind/footer-edu-mind.component";
import { TranslateModule, TranslateService } from '@ngx-translate/core';
import { faBed, faCheck, faCircleCheck, faGraduationCap, faHandHoldingHeart, faThumbsDown, faThumbsUp, faUsers } from '@fortawesome/free-solid-svg-icons';
import { IconProp } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { SocialMedialEduMindComponent } from "../conponent/social-medial-edu-mind/social-medial-edu-mind.component";
import { ViewportScroller } from '@angular/common';

@Component({
  selector: 'app-docs-edu-mind',
  standalone: true,
  imports: [NavBarEduMindComponent, FooterEduMindComponent, TranslateModule, FontAwesomeModule, SocialMedialEduMindComponent],
  templateUrl: './docs-edu-mind.component.html',
  styleUrl: './docs-edu-mind.component.css'
})
export class DocsEduMindComponent {
    translate: TranslateService = inject(TranslateService);
    private viewportScroller: ViewportScroller = inject(ViewportScroller);
    
    changeLanguage(lang: string): void {
        this.translate.use(lang); 
    }

    scrollToSection(elementId: string): void {
        event?.preventDefault();
        this.viewportScroller.scrollToAnchor(elementId);
    }

    faBed: IconProp = faBed as IconProp;
    faCheck: IconProp = faCheck as IconProp;
    faUsers: IconProp = faUsers as IconProp;
    faCircleCheck: IconProp = faCircleCheck as IconProp;
    faThumbsUp: IconProp = faThumbsUp as IconProp;
    faThumbsDown: IconProp = faThumbsDown as IconProp;
}
