import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { IconProp } from '@fortawesome/fontawesome-svg-core';
import { 
  faHome, 
  faUsers, 
  faClipboardList, 
  faChartLine, 
  faCog, 
  faSignOutAlt,
  faBars,
  faUser,
  faChevronDown,
  faTimes,
  faLightbulb,
  faPlus,
  faList,
  faAngleDown,  // Add this for submenu toggle
  faAngleUp     // Add this for submenu toggle
} from '@fortawesome/free-solid-svg-icons';


@Component({
  selector: 'app-side-menu-vita-edu',
  standalone: true,
  imports: [CommonModule, RouterModule, FontAwesomeModule],
  templateUrl: './side-menu-vita-edu.component.html',
  styleUrls: ['./side-menu-vita-edu.component.css']
})
export class SideMenuVitaEduComponent {
  isSidebarOpen = true;
  isDropdownOpen = false;
  submenuStates: { [key: string]: boolean } = {};
  userAvatar = '../../../../assets/img-EduMind/Landing-page-EduMind/perfil.svg';
  userName = 'Christian Uscanga Parra ';

  // Icons
  faBars = faBars as IconProp;
  faUser = faUser as IconProp;
  faSignOut = faSignOutAlt as IconProp;
  faChevronDown = faChevronDown as IconProp;
  faCog = faCog as IconProp;
  faTimes = faTimes as IconProp;
  faAngleDown = faAngleDown as IconProp;
  faAngleUp = faAngleUp as IconProp;

  menuItems = [
    { icon: faHome as IconProp, label: 'Dashboard', route: '/dashboard/Home-dashboard-vita-edu' },
    { icon: faUsers as IconProp, label: 'Colaboradores', route: '/dashboard/User-dashboard-vita-edu' },
    { icon: faLightbulb as IconProp, label: 'Recomendaciones', route: '/dashboard/recomendation-vita-edu' },
    { icon: faChartLine as IconProp, label: 'Estadísticas', route: '/dashboard/statistics-vita-edu' },
    { 
      icon: faClipboardList as IconProp, 
      label: 'Tests',
      id: 'tests',
      children: [
        { icon: faList as IconProp, label: 'Mis Tests', route: '/dashboard/my-test-vita-edu' },
        { icon: faPlus as IconProp, label: 'Nuevo Test', route: '/dashboard/new-test-vita-edu' }
      ]
    },
  ];

  toggleSidebar(): void {
    this.isSidebarOpen = !this.isSidebarOpen;
  }

  toggleSubmenu(itemId: string): void {
    this.submenuStates[itemId] = !this.submenuStates[itemId];
  }

  toggleDropdown(): void {
    this.isDropdownOpen = !this.isDropdownOpen;
  }

  logout(): void {
    console.log('Cerrando sesión...');
  }
}
