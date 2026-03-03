import { Routes } from '@angular/router';
import { Feed } from './components/feed/feed';
import { Search } from './components/search/search';
import { Profile } from './components/profile/profile';
import { Home } from './components/home/home';
import { canActivateAuthRole } from './guards/auth-role.guard';

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
    canActivate: [canActivateAuthRole]
  },
  {
    path: 'search',
    title: 'Search Pics',
    component: Search,
    canActivate: [canActivateAuthRole]
  },
  {
    path: 'profile',
    title: 'User Profile',
    component: Profile,
    canActivate: [canActivateAuthRole]
  }
];
