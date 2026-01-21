import { Component, computed, inject, input } from '@angular/core';
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
  resourceId = input.required<string>();
  service = inject(PostService);
  resource$ = computed(() =>
                      this.service.getResource(this.resourceId()));
  username$ = computed(() =>
                      this.service.getUsername(this.resourceId()));
  description$ = computed(() =>
                      this.service.getDescription(this.resourceId()));
}
