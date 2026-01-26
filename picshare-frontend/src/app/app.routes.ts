import { Routes } from '@angular/router';
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
    component: Feed
  },
  {
    path: 'search',
    title: 'Search Pics',
    component: Search
  },
  {
    path: 'user/:id',
    title: 'User Profile',
    component: User,
  }
];
