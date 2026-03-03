import { Component, inject } from '@angular/core';
import Keycloak from 'keycloak-js';

@Component({
  selector: 'app-login-button',
  standalone: true,
  templateUrl: './login-button.html',
  styleUrl: './login-button.css',
})

export class LoginButton{
  private keycloak = inject(Keycloak)

  login() {
    this.keycloak.login();
  }

}
