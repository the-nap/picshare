import { Component, signal } from '@angular/core';
import { MatTabsModule } from '@angular/material/tabs';
import { UserSearch } from '../user-search/user-search';
import { TagSearch } from '../tag-search/tag-search';
import { FormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input'

@Component({
  selector: 'app-search',
  imports: [MatTabsModule, UserSearch, TagSearch, FormsModule, MatFormFieldModule, MatInputModule],
  templateUrl: './search.html',
  styleUrl: './search.css',
})
export class Search {

  toSearch: string = '';

}
