import { Routes } from '@angular/router';
import { Feed } from './feed/feed';
import { Search } from './search/search';
import { Profile } from './profile/profile';

export const routes: Routes = [

  {
    path: '',
    redirectTo: 'feed',
    pathMatch: 'full'
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
    path: 'user',
    title: 'User Profile',
    component: Profile,
  }
];
