import { Component, inject } from '@angular/core';
import Keycloak from 'keycloak-js';

@Component({
  selector: 'app-register-button',
  imports: [],
  templateUrl: './register-button.html',
  styleUrl: './register-button.css',
})
export class RegisterButton {

  private readonly keycloak = inject(Keycloak)

  register() {
    this.keycloak.register();
  }
}
