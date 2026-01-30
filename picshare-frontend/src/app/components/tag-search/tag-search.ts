import { Component, effect, inject, input } from '@angular/core';
import { Gallery } from '../gallery/gallery';
import { PreviewService } from '../preview/preview.service';
import { rxResource } from '@angular/core/rxjs-interop';
import { debounceTime, distinctUntilChanged, of } from 'rxjs';

@Component({
  selector: 'app-tag-search',
  imports: [Gallery],
  templateUrl: './tag-search.html',
  styleUrl: './tag-search.css',
})
export class TagSearch {

  tag = input.required<string>();

  service = inject(PreviewService);

  postIds = rxResource<number[], string | null>({
    params: () => {
      const value = this.tag().trim();
      return value.length >= 2 ? value : null;
    },
    stream: ({params}) => {
      if(params === null){
        return of([]);
      }
      return this.service.getByTag(params).pipe(
        debounceTime(500),
        distinctUntilChanged(),
      );
    }
  });

}
