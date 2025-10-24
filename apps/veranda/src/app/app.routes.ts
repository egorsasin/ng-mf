import { Route } from '@angular/router';

export const appRoutes: Route[] = [
  {
    path: 'shell',
    loadChildren: () => import('shell/Routes').then((m) => m!.remoteRoutes),
  },
];
