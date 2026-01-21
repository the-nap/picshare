import { Component, effect, inject, input } from '@angular/core';
import { MatCardModule } from '@angular/material/card'
import { AsyncPipe, NgOptimizedImage } from '@angular/common';
import { PostService } from './post.service';
import { PostModel } from '../../models/post.model';
import { Observable, switchMap } from 'rxjs';
import { UserModel } from '../../models/user.model';
import { UserService } from '../user/user.service';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner'

@Component({
  selector: 'app-post',
  imports: [MatCardModule, MatProgressSpinnerModule, NgOptimizedImage, AsyncPipe],
  templateUrl: './post.html',
  styleUrl: './post.css',
})

export class Post {
  postService = inject(PostService);
  userService = inject(UserService);

  resourceId = input.required<number>();

  post$!: Observable<PostModel>;
  user$!: Observable<UserModel>;

  constructor() {
    effect(() => {
      this.post$ = this.postService.getPost(this.resourceId())
    });
    this.user$ = this.post$.pipe(
      switchMap(post => this.userService.getUser(post.userId))
    );
  }
}
