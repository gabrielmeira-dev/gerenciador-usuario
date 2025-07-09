import { Routes } from '@angular/router';
import { List } from './features/list/list';

export const routes: Routes = [
    {
        path: 'list',
       loadChildren: () => import('./features/list/routes').then((m) => m.routes)   
    },
    {
        path: '',
        redirectTo: 'list',
        pathMatch: 'full'
    }
];
