import { Component, effect, inject, input } from '@angular/core';
import { Gallery } from '../gallery/gallery';
import { FeedService } from './feed.service';
import { AsyncPipe } from '@angular/common';
import { Observable } from 'rxjs';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';

@Component({
  selector: 'app-feed',
  imports: [Gallery, AsyncPipe, MatProgressSpinnerModule],
  templateUrl: './feed.html',
  styleUrl: './feed.css',
})
export class Feed {
  userId = input.required<string>();
  service = inject(FeedService);

  resourceIds$!: Observable<string[]>;

  constructor() {
    effect(() => {
      this.resourceIds$ = this.service.getFeed(this.userId())
    });
  }

}
