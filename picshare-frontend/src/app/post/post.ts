import { Component } from '@angular/core';
import { MatCardModule } from '@angular/material/card'

@Component({
  selector: 'app-post',
  imports: [MatCardModule],
  templateUrl: './post.html',
  styleUrl: './post.css',
})
export class Post {

  image : string = "test";

}
