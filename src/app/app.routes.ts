import { Routes } from '@angular/router';
import { LoginComponent } from './pages/login/login.component';
import { HomeComponent } from './pages/home/home.component';
import { AuthGuard } from './services/auth.guard';
import { SignupComponent } from './pages/signup/signup.component';
import { CreateOrderComponent } from './pages/create-order/create-order.component';

export const routes: Routes = [
    {
        path: 'login',
        component: LoginComponent,
        title: 'Login Page'
    },
    {
        path: 'signup',
        component: SignupComponent,
        title: 'SignUp Page'
    },
    {
        path: 'create-order',
        component: CreateOrderComponent,
        title: 'Create Order Page',
        canActivate: [AuthGuard]
    },
    {
        path: '',
        component: HomeComponent,
        title: 'Home Page',
        canActivate: [AuthGuard]
    },
];
