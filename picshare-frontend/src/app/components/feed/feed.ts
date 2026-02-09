import { Component, inject, input } from '@angular/core';
import { Gallery } from '../gallery/gallery';
import { FeedService } from './feed.service';
import { rxResource } from '@angular/core/rxjs-interop';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { AuthService, User } from '@auth0/auth0-angular';
import { of, switchMap } from 'rxjs';

@Component({
  selector: 'app-feed',
  imports: [Gallery, MatProgressSpinnerModule],
  templateUrl: './feed.html',
  styleUrl: './feed.css',
})
export class Feed {
  feedService = inject(FeedService);
  auth = inject(AuthService);

  images = rxResource<number[], User | null>({
    params: () => null,
    stream: () => {
      return this.auth.user$.pipe(
        switchMap(user => {
          if ( !user || !user.sub )
            return of([]);
          return this.feedService.getFeed(user.sub);
        })
      );
    },
  });
}
