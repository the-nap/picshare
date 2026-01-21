import { Component, computed, inject, input } from '@angular/core';
import { Gallery } from '../gallery/gallery';
import { FeedService } from './feed.service';
import { AsyncPipe } from '@angular/common';

@Component({
  selector: 'app-feed',
  imports: [Gallery, AsyncPipe],
  templateUrl: './feed.html',
  styleUrl: './feed.css',
})
export class Feed {
  userId = input.required<string>();
  service = inject(FeedService);

  resourceId$: any;

  ngOnInit() {
    this.resourceId$ = this.service.getFeed(this.userId());
  }

}
