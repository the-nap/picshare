import { NgOptimizedImage } from '@angular/common';
import { Component, inject, signal } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UserModel } from '../../models/user.model';
import { EMPTY, of, switchMap } from 'rxjs';
import { UserService } from './user.service';
import { rxResource } from '@angular/core/rxjs-interop';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { AuthService } from '@auth0/auth0-angular';

@Component({
  selector: 'app-user',
  imports: [NgOptimizedImage, MatProgressSpinnerModule],
  templateUrl: './user.html',
  styleUrl: './user.css',
})

export class User {

  service = inject(UserService);
  authService = inject(AuthService);

  user = rxResource<UserModel | undefined, string | null>({
    params: () => null,
    stream: () => {
      return this.authService.user$.pipe(
        switchMap(user => {
          if ( !user || !user.sub )
            return of(undefined);
          return this.service.getUser(user.sub);
        })
      );
    },
  });
}
