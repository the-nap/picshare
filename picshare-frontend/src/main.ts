import { bootstrapApplication } from '@angular/platform-browser';
import { authHttpInterceptorFn, provideAuth0 } from '@auth0/auth0-angular';
import { environment as env } from './environments/environment';
import { App } from './app/app';
import { provideHttpClient, withInterceptors } from '@angular/common/http';
import { provideRouter } from '@angular/router';
import { routes } from './app/app.routes';

const auth0Config = {
  providers: [
    provideHttpClient(
      withInterceptors([authHttpInterceptorFn])
    ),
    provideRouter(routes),
    provideAuth0({
      ...env.auth,
      httpInterceptor: {
        ...env.httpInterceptor,
      },
    }),
  ]
};

bootstrapApplication(App, auth0Config)
  .catch((err) => console.error(err));
