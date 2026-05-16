import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'client-apps',
    pathMatch: 'full'
  },
  {
    path: 'client-apps',
    loadComponent: () =>
      import('./features/client-apps/pages/client-app-list/client-app-list.component')
        .then(m => m.ClientAppListComponent)
  },
  {
    path: 'client-apps/create',
    loadComponent: () =>
      import('./features/client-apps/pages/client-app-create/client-app-create.component')
        .then(m => m.ClientAppCreateComponent)
  },
  {
    path: 'client-apps/:id',
    loadComponent: () =>
      import('./features/client-apps/pages/client-app-detail/client-app-detail.component')
        .then(m => m.ClientAppDetailComponent)
  }
];
