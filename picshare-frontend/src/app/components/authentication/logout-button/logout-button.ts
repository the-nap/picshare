import { Component, inject } from '@angular/core';
import Keycloak from 'keycloak-js';

@Component({
  selector: 'app-logout-button',
  standalone: true,
  template: `
  `
})
export class LogoutButton {
  private readonly keycloak = inject(Keycloak);

  logout(): void {
    this.keycloak.logout();
  }
}
