import { Component } from '@angular/core';
import { MatTabsModule } from '@angular/material/tabs';
import { RouterLink, RouterOutlet, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-navbar',
  imports: [MatTabsModule, RouterLink, RouterOutlet, RouterLinkActive],
  templateUrl: './navbar.html',
  styleUrl: './navbar.css',
})
export class Navbar {
  links = [
    { label: 'Feed', route: '/feed' },
    { label: 'Search', route: '/search' },
    { label: 'Profile', route: '/user' }
  ]
}
