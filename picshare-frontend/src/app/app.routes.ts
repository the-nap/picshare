import { Routes } from '@angular/router';
import { authGuardFn } from '@auth0/auth0-angular';
import { Feed } from './components/feed/feed';
import { Search } from './components/search/search';
import { User } from './components/user/user';
import { Home } from './components/home/home';

export const routes: Routes = [

  {
    path: '',
    redirectTo: '/home',
    pathMatch: 'full'
  },
  {
    path: 'home',
    title: 'Homepage',
    component: Home,
  },
  {
    path: 'feed',
    title: 'Personal Feed',
    component: Feed,
    canActivate: [authGuardFn]
  },
  {
    path: 'search',
    title: 'Search Pics',
    component: Search,
    canActivate: [authGuardFn]
  },
  {
    path: 'user/:id',
    title: 'User Profile',
    component: User,
    canActivate: [authGuardFn]
  }
];
