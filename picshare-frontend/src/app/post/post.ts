import { Component, inject, input } from '@angular/core';
import { MatCardModule } from '@angular/material/card'
import { NgOptimizedImage } from '@angular/common';
import { PostService } from './post.service';

@Component({
  selector: 'app-post',
  imports: [MatCardModule, NgOptimizedImage],
  templateUrl: './post.html',
  styleUrl: './post.css',
})

export class Post {
  readonly resourceId = input.required<string>();
  service = inject(PostService);

  resource = this.service.getResource(this.resourceId);

}
