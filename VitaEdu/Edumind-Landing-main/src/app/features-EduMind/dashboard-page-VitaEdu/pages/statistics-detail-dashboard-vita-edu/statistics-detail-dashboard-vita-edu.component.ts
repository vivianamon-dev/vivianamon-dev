import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Chart } from 'chart.js/auto';

@Component({
  selector: 'app-statistics-detail-dashboard-vita-edu',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './statistics-detail-dashboard-vita-edu.component.html',
  styleUrls: ['./statistics-detail-dashboard-vita-edu.component.css']
})
export class StatisticsDetailDashboardVitaEduComponent {
  studentData = {
    name: 'Elizabeth López',
    age: '22 años',
    avatar: '../../../../assets/img-EduMind/Landing-page-EduMind/perfil.svg'
  };

  completedTests = [
    { name: 'Test Inicial', status: 'Completado' },
    { name: 'Test sociológico', status: 'Completado' },
    { name: 'Test escolar', status: 'Completado' },
    { name: 'Test diario', status: 'Completado' }
  ];

  pieChartData = {
    datasets: [{
      data: [40, 25, 20, 15],
      backgroundColor: ['#36A2EB', '#FF6384', '#4BC0C0', '#9966ff']
    }]
  };

  ngOnInit() {
    this.createPieChart();
  }

  createPieChart() {
    const ctx = document.getElementById('stressChart') as HTMLCanvasElement;
    new Chart(ctx, {
      type: 'pie',
      data: this.pieChartData,
      options: {
        responsive: true,
        plugins: {
          legend: {
            position: 'right'
          }
        }
      }
    });
  }

  sendRecommendation(form: any) {
    // Implement recommendation sending logic
    console.log('Sending recommendation:', form.value);
  }
}
