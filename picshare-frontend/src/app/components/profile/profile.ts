import { NgOptimizedImage } from '@angular/common';
import { Component, inject } from '@angular/core';
import { UserModel } from '../../models/user.model';
import { of, switchMap } from 'rxjs';
import { UserService } from '../user-search/user.service';
import { rxResource } from '@angular/core/rxjs-interop';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { AuthService, User } from '@auth0/auth0-angular';
import { Gallery } from '../gallery/gallery';
import { PostService } from '../post/post.service';

@Component({
  selector: 'app-profile',
  imports: [NgOptimizedImage, MatProgressSpinnerModule, Gallery],
  templateUrl: './profile.html',
  styleUrl: './profile.css',
})

export class Profile {

  postService = inject(PostService);
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

  posts = rxResource<number[], User | null>({
    params: () => null,
    stream: () => {
      return this.authService.user$.pipe(
        switchMap(user => {
          if ( !user || !user.sub )
            return of([]);
          return this.postService.getPostByUser(user.sub);
        })
      );
    },
  });
}
