import { NgOptimizedImage } from '@angular/common';
import { Component, inject } from '@angular/core';
import { UserModel } from '../../models/user.model';
import { from, map, of, switchMap } from 'rxjs';
import { UserService } from '../user-search/user.service';
import { rxResource } from '@angular/core/rxjs-interop';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import Keycloak from 'keycloak-js';
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
  private readonly keycloak = inject(Keycloak);

  user = rxResource<UserModel | undefined, string | null>({
    stream: () => {
      return from(this.keycloak.loadUserInfo())
        .pipe(
          switchMap(({ sub }) => this.service.getUser(sub)));
    },
  });

  posts = rxResource({
    stream: () => {
      return from(this.keycloak.loadUserInfo())
      .pipe(
        switchMap(({ sub }) => this.postService.getPostByUser(sub)));
    }
  })
}
