import { Component, computed, inject, input } from '@angular/core';
import { MatCardModule } from '@angular/material/card'
import { NgOptimizedImage } from '@angular/common';
import { PreviewService } from './preview.service';
import { rxResource } from '@angular/core/rxjs-interop';

@Component({
  selector: 'app-preview',
  imports: [MatCardModule, NgOptimizedImage],
  templateUrl: './preview.html',
  styleUrl: './preview.css',
})

export class Preview {
  readonly resourceId = input.required<number>();
  service = inject(PreviewService);

  preview = rxResource<string, number>({
    params: () => ( this.resourceId() ),
    stream: ({ params }) => {
      return this.service.getResource( params )
    },
  });
}
