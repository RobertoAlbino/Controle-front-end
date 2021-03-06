import { Routes } from '@angular/router';

import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';

export const rootRouterConfig: Routes = [
    { 
        path: '', 
        redirectTo: 'login', 
        pathMatch: 'full' 
    },
    {   
        path: 'login', 
        component: LoginComponent  
    },
    { 
        path: 'home', 
        component: HomeComponent
    }
]

