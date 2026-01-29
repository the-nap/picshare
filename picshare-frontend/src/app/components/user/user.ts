import { NgOptimizedImage } from '@angular/common';
import { Component, inject, signal } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UserModel } from '../../models/user.model';
import { EMPTY } from 'rxjs';
import { UserService } from './user.service';
import { rxResource } from '@angular/core/rxjs-interop';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';

@Component({
  selector: 'app-user',
  imports: [NgOptimizedImage, MatProgressSpinnerModule],
  templateUrl: './user.html',
  styleUrl: './user.css',
})

export class User {

  userId = signal<number | undefined>(undefined);

  service = inject(UserService);
  route = inject(ActivatedRoute);

  constructor() {
    this.route.params.subscribe((params) => {
      this.userId.set(params['id']);
    });
  }

  user = rxResource<UserModel | undefined, number | undefined>({
    params: () => ( this.userId() ),
    stream: ({params}) => {
      if(!params)
        return EMPTY;
      return this.service.getUser(params);
    }
  });
}
