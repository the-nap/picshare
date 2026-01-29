import { Component, computed, effect, inject, input, OnInit } from '@angular/core';
import { MatCardModule } from '@angular/material/card'
import { AsyncPipe, NgOptimizedImage } from '@angular/common';
import { PostService } from './post.service';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner'
import { EMPTY, Observable, switchMap } from 'rxjs';
import { UserModel } from '../../models/user.model';
import { PostModel } from '../../models/post.model';
import { rxResource } from '@angular/core/rxjs-interop';

@Component({
  selector: 'app-post',
  imports: [MatCardModule, MatProgressSpinnerModule, NgOptimizedImage, AsyncPipe],
  templateUrl: './post.html',
  styleUrl: './post.css',
})

export class Post{
  private postService = inject(PostService);

  resourceId = input.required<number>();

  post = rxResource<PostModel, number>({
    params: () => ( this.resourceId() ),
    stream: ({params}) => {
      return this.postService.getPost(params);
    }
  });

  user = rxResource<UserModel, PostModel | undefined>({
    params: () => ( this.post.value() ),
    stream: ({params}) => {
      if (!params) {
        return EMPTY;
      }
      return this.postService.getUser(params.userId);
    }
  });
}
