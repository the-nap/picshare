import { Component, computed, inject} from '@angular/core';
import { LoginButton } from '../authentication/login-button/login-button';
import { Navbar } from '../navbar/navbar';
import { KEYCLOAK_EVENT_SIGNAL, KeycloakEventType, ReadyArgs, typeEventArgs } from 'keycloak-angular';

@Component({
  selector: 'app-home',
  imports: [Navbar, LoginButton],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home {
  authenticated = computed(() => {
    const event = this.keycloakSignal();
    return event.type === KeycloakEventType.Ready
    ? typeEventArgs<ReadyArgs>(event.args)
    : false;
  })

  keycloakStatus = computed(() => this.keycloakSignal().type);

  private readonly keycloakSignal = inject(KEYCLOAK_EVENT_SIGNAL);

}
