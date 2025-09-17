import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { IconProp } from '@fortawesome/fontawesome-svg-core';
import { faUsers, faClipboardCheck, faUserTie, faChartLine } from '@fortawesome/free-solid-svg-icons';
import { SideMenuVitaEduComponent } from '../../componentes-dashboard/side-menu-vita-edu/side-menu-vita-edu.component';
import { Chart } from 'chart.js/auto';

@Component({
  selector: 'app-home-dashboard-vita-edu',
  standalone: true,
  imports: [CommonModule, FontAwesomeModule, SideMenuVitaEduComponent],
  templateUrl: './home-dashboard-vita-edu.component.html',
  styleUrls: ['./home-dashboard-vita-edu.component.css']
})
export class HomeDashboardVitaEduComponent implements OnInit {
  faUsers = faUsers as IconProp;
  faClipboardCheck = faClipboardCheck as IconProp;
  faUserTie = faUserTie as IconProp;
  faChartLine = faChartLine as IconProp;

  // Datos de ejemplo
  stats = {
    totalUsers: 1250,
    totalCollaborators: 45,
    totalTests: 3200,
    completionRate: 78
  };

  ngOnInit() {
    this.initCharts();
  }

  initCharts() {
    // Gráfica de usuarios por mes
    new Chart('usersChart', {
      type: 'line',
      data: {
        labels: ['Ene', 'Feb', 'Mar', 'Abr', 'May', 'Jun'],
        datasets: [{
          label: 'Nuevos Usuarios',
          data: [65, 59, 80, 81, 56, 55],
          borderColor: '#114C5F',
          tension: 0.1
        }]
      }
    });

    // Gráfica de tests completados
    new Chart('testsChart', {
      type: 'bar',
      data: {
        labels: ['Lun', 'Mar', 'Mie', 'Jue', 'Vie', 'Sab', 'Dom'],
        datasets: [{
          label: 'Tests Completados',
          data: [12, 19, 3, 5, 2, 3, 7],
          backgroundColor: '#0799b6'
        }]
      }
    });
  }
}
