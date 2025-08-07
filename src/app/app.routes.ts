import { Routes } from '@angular/router';
import { LoginComponent } from './features/auth/login/login.component';
import { DashboardComponent } from './features/dashboard/dashboard/dashboard.component';
export const routes: Routes = [
    {
        path:'',component:LoginComponent
    },
    {
        path:'dashbord',component:DashboardComponent
    }
];
