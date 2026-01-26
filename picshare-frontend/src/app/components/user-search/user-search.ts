import { Component, effect, inject, input } from '@angular/core';
import { MatListModule } from '@angular/material/list';
import { RouterLink } from '@angular/router';
import { UserService } from '../user/user.service';
import { UserModel } from '../../models/user.model';
import { Observable } from 'rxjs';
import { AsyncPipe, NgOptimizedImage } from '@angular/common';

@Component({
  selector: 'app-user-search',
  imports: [MatListModule, RouterLink, AsyncPipe, NgOptimizedImage],
  templateUrl: './user-search.html',
  styleUrl: './user-search.css',
})

export class UserSearch {

  service = inject(UserService);
  users$!: Observable<UserModel[]>

  username = input.required<string>();

  constructor() {
    effect(() => {
      this.users$ = this.service.getByUsername(this.username());
    });
  }


}
