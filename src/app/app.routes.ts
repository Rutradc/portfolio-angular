import { Routes } from '@angular/router';
import { App } from './app';
import { Springskate } from './projects/springskate/springskate';
import { Home } from './home/home';

export const routes: Routes = [
    {
        path:'',
        component: Home
    },
    {
        path:'projects/springskate',
        loadComponent: () => import('./projects/springskate/springskate').then(c => c.Springskate),
    },
    {
        path:'**',
        redirectTo: ''
    },
];
