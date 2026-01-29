import { Component, inject, input } from '@angular/core';
import { Gallery } from '../gallery/gallery';
import { FeedService } from './feed.service';
import { rxResource } from '@angular/core/rxjs-interop';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';

@Component({
  selector: 'app-feed',
  imports: [Gallery, MatProgressSpinnerModule],
  templateUrl: './feed.html',
  styleUrl: './feed.css',
})
export class Feed {
  userId = input.required<number>();
  service = inject(FeedService);

  images = rxResource<string[], number>({
    params: () => ( this.userId() ),
    stream: ({params}) => {
      return this.service.getFeed(params)
    },
  });



}
