import { Routes } from '@angular/router';
import { List } from './features/list/list';

export const routes: Routes = [
    {
        path: 'list',
       loadChildren: () => import('./features/list/routes').then((m) => m.routes)   
    },
    {
        path: 'create',
        loadChildren: () => import('./features/create/routes').then((m) => m.routes)  
    },
    {
        path: 'edit/:id',
        loadChildren: () => import('./features/edit/routes').then((m) => m.routes)  
    },
    {
        path: '',
        redirectTo: 'list',
        pathMatch: 'full'
    }
];
