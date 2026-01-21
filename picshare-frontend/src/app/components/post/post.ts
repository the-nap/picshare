import { Component, computed, inject, input } from '@angular/core';
import { MatCardModule } from '@angular/material/card'
import { NgOptimizedImage } from '@angular/common';
import { PostService } from './post.service';
import { PostModel } from '../../models/post.model';

@Component({
  selector: 'app-post',
  imports: [MatCardModule, NgOptimizedImage],
  templateUrl: './post.html',
  styleUrl: './post.css',
})

export class Post {
  resourceId = input.required<number>();
  service = inject(PostService);

  post: PostModel;

  ngOnInit(){
    this.service.getPost(this.resourceId()).subscribe((resource) => {
                                                   this.post = resource;
    });
  }
}
