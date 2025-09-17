import { Routes } from '@angular/router';
import { LoginVitaEduComponent } from './login-vita-edu/login-vita-edu.component';
import { RegisterVitaEduComponent } from './register-vita-edu/register-vita-edu.component';

export const AuthRoutes: Routes = [
    {
      path: 'auth',
      children: [
        { path: '', redirectTo: 'login-vita-edu', pathMatch: 'full' },
        // paginas de auts
        { path: 'login-vita-edu', component: LoginVitaEduComponent  },
        { path: 'register-vita-edu', component: RegisterVitaEduComponent  },
        
      ],
    },
  ];