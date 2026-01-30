import { Component, inject, input } from '@angular/core';
import { Gallery } from '../gallery/gallery';
import { PreviewService } from '../preview/preview.service';
import { AsyncPipe } from '@angular/common';
import { rxResource } from '@angular/core/rxjs-interop';

@Component({
  selector: 'app-tag-search',
  imports: [Gallery, AsyncPipe],
  templateUrl: './tag-search.html',
  styleUrl: './tag-search.css',
})
export class TagSearch {

  tag = input.required<string>();

  service = inject(PreviewService);

  postIds = rxResource<number[], string>({
    params: () => ( this.tag() ),
    stream: ({params}) => {
      return this.service.getByTag(params);
    }
  });
}
