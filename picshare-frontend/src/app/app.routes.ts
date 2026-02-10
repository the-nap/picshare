import { Routes } from '@angular/router';
import { authGuardFn } from '@auth0/auth0-angular';
import { Feed } from './components/feed/feed';
import { Search } from './components/search/search';
import { Profile } from './components/profile/profile';
import { Home } from './components/home/home';

export const routes: Routes = [

  {
    path: '',
    redirectTo: '/feed',
    pathMatch: 'full'
  },
  {
    path: 'login',
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
    path: 'profile',
    title: 'User Profile',
    component: Profile,
    canActivate: [authGuardFn]
  }
];
