import { Component, input } from '@angular/core';
import { Preview } from '../preview/preview';
import { MatGridListModule } from '@angular/material/grid-list'

@Component({
  selector: 'app-gallery',
  imports: [Preview, MatGridListModule],
  templateUrl: './gallery.html',
  styleUrl: './gallery.css',
})
export class Gallery {
  postIds = input.required<string[]>();

}
