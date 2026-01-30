import { Component, inject, signal } from '@angular/core';
import { Navbar } from './components/navbar/navbar';
import { AuthService } from '@auth0/auth0-angular';
import { LoginButtonComponent } from './components/auth0/login-button.component';
import { LogoutButtonComponent } from './components/auth0/logout-button.component';
import { ProfileComponent } from './components/auth0/profile.component';
import { AsyncPipe } from '@angular/common';
import { Search } from './components/search/search';

@Component({
  selector: 'app-root',
  imports: [Navbar, LoginButtonComponent, LogoutButtonComponent, ProfileComponent, AsyncPipe, Search],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('picshare-frontend');
  protected auth = inject(AuthService);
}
