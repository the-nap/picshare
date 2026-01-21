import { Component, computed, inject, input } from '@angular/core';
import { MatCardModule } from '@angular/material/card'
import { NgOptimizedImage } from '@angular/common';
import { PreviewService } from './preview.service';

@Component({
  selector: 'app-preview',
  imports: [MatCardModule, NgOptimizedImage],
  templateUrl: './preview.html',
  styleUrl: './preview.css',
})

export class Post {
  resourceId = input.required<string>();
  service = inject(PreviewService);
  resource$ = computed(() =>
                       this.service.getResource(this.resourceId()));
}
