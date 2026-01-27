import { Component, effect, inject, input } from '@angular/core';
import { Gallery } from '../gallery/gallery';
import { PreviewService } from '../preview/preview.service';
import { Observable } from 'rxjs';
import { AsyncPipe } from '@angular/common';

@Component({
  selector: 'app-tag-search',
  imports: [Gallery, AsyncPipe],
  templateUrl: './tag-search.html',
  styleUrl: './tag-search.css',
})
export class TagSearch {

  tag = input.required<string>();

  service = inject(PreviewService);

  postIds$!: Observable<string[]>

  constructor() {
    effect(() => {
      this.postIds$ = this.service.getByTag(this.tag());
    });
  }



}
