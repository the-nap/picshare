import { Component, inject } from '@angular/core';
import { Gallery } from '../gallery/gallery';
import { FeedService } from './feed.service';
import { rxResource } from '@angular/core/rxjs-interop';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import Keycloak from 'keycloak-js';
import { from, switchMap } from 'rxjs';

@Component({
  selector: 'app-feed',
  imports: [Gallery, MatProgressSpinnerModule],
  templateUrl: './feed.html',
  styleUrl: './feed.css',
})
export class Feed {
  feedService = inject(FeedService);
  private readonly keycloak = inject(Keycloak);

  images = rxResource({
    stream: () => {
      return from(this.keycloak.loadUserInfo())
        .pipe(
          switchMap(({ sub }) => this.feedService.getFeed(sub)));
    }
  });
}
