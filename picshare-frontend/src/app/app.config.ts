import { provideRouter } from "@angular/router";
import { ApplicationConfig, provideZoneChangeDetection } from "@angular/core";
import { includeBearerTokenInterceptor } from 'keycloak-angular';

import { routes } from './app.routes';
import { provideHttpClient, withInterceptors } from "@angular/common/http";
import { provideKeycloakAngular } from "./keycloak.config";

export const appConfig: ApplicationConfig = {
  providers: [
    provideKeycloakAngular(),
    //provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(routes),
    provideHttpClient(withInterceptors([includeBearerTokenInterceptor])),
  ]
};
