import { Routes } from '@angular/router';
import { Home } from './pages/home/home';

export const routes: Routes = [
  { path: '', component: Home },
  { path: 'give', loadComponent: () => import('./pages/give/give').then(m => m.Give) },
  { path: 'connect', loadComponent: () => import('./pages/connect/connect').then(m => m.Connect) },
  { path: 'gallery', loadComponent: () => import('./pages/gallery/gallery').then(m => m.Gallery) },
  { path: 'contact', loadComponent: () => import('./pages/contact/contact').then(m => m.Contact) },
  // Wildcard redirect to home
  { path: '**', redirectTo: '', pathMatch: 'full' }
];
