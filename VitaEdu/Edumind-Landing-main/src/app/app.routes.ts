import { Routes } from '@angular/router';
import { PageRoutes } from './features-EduMind/landing-page-EduMind/page-EduMind.routes';
import { DashboardRoutes } from './features-EduMind/dashboard-page-VitaEdu/dashboard.routes';
import { AuthRoutes } from './features-EduMind/auth-VitaEdu/auth.routes';

export const routes: Routes = [
    { path: '', redirectTo: '/landing/Home-VitaEdu', pathMatch: 'full' },
    ...PageRoutes,
    ...DashboardRoutes,
    ...AuthRoutes,
    { path: '**', redirectTo: '/landing/Home-VitaEdu', pathMatch: 'full' }
];
