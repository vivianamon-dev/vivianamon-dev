import { Routes } from '@angular/router';
import { HomeDashboardVitaEduComponent } from './pages/home-dashboard-vita-edu/home-dashboard-vita-edu.component';
import { UsersDashboardVitaEduComponent } from './pages/users-dashboard-vita-edu/users-dashboard-vita-edu.component';
import { RecommendationsDashboardVitaEduComponent } from './pages/recommendations-dashboard-vita-edu/recommendations-dashboard-vita-edu.component';
import { StatisticsDashboardVitaEduComponent } from './pages/statistics-dashboard-vita-edu/statistics-dashboard-vita-edu.component';
import { StatisticsDetailDashboardVitaEduComponent } from './pages/statistics-detail-dashboard-vita-edu/statistics-detail-dashboard-vita-edu.component';
import { MyTestDashboardVitaEduComponent } from './pages/my-test-dashboard-vita-edu/my-test-dashboard-vita-edu.component';
import { NewTestDashboardVitaEduComponent } from './pages/new-test-dashboard-vita-edu/new-test-dashboard-vita-edu.component';

export const DashboardRoutes: Routes = [
  {
    path: 'dashboard',
    children: [
      { path: '', redirectTo: 'Home-dashboard-vita-edu', pathMatch: 'full' },
      { path: 'Home-dashboard-vita-edu', component: HomeDashboardVitaEduComponent },
      { path: 'User-dashboard-vita-edu', component: UsersDashboardVitaEduComponent },
      { path: 'recomendation-vita-edu', component: RecommendationsDashboardVitaEduComponent},
      { path: 'statistics-vita-edu', component: StatisticsDashboardVitaEduComponent },
      { path: 'statistics-detail-vita-edu', component: StatisticsDetailDashboardVitaEduComponent },
      { path: 'my-test-vita-edu', component: MyTestDashboardVitaEduComponent },
      { path: 'new-test-vita-edu', component: NewTestDashboardVitaEduComponent },
      // Otras rutas del dashboard
    ]
  }
];