import { Component, inject, input } from '@angular/core';
import { MatListModule } from '@angular/material/list';
import { RouterLink } from '@angular/router';
import { UserService } from '../user/user.service';
import { UserModel } from '../../models/user.model';
import { EMPTY } from 'rxjs';
import { NgOptimizedImage } from '@angular/common';
import { rxResource } from '@angular/core/rxjs-interop';

@Component({
  selector: 'app-user-search',
  imports: [MatListModule, RouterLink, NgOptimizedImage],
  templateUrl: './user-search.html',
  styleUrl: './user-search.css',
})

export class UserSearch {

  service = inject(UserService);

  username = input.required<string>();

  users = rxResource<UserModel[], string> ({
    params: () => ( this.username() ),
    stream: ({params}) => {
      if(!params){
        return EMPTY;
      }
      return this.service.getByUsername(params)
    }
  });
}
