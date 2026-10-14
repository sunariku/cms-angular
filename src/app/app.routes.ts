import { Routes } from '@angular/router';
import { Home } from './pages/home/home';
import { News } from './pages/news/news';
import { Error } from './pages/error/error';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
  },
  {
    path: 'home',
    component: Home,
  },
  {
    path: 'news',
    component: News,
  },
  {
    path: '**',
    component: Error,
  },
];
