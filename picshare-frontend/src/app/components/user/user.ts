import { AsyncPipe, NgOptimizedImage } from '@angular/common';
import { Component, effect, inject, input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UserModel } from '../../models/user.model';
import { map, Observable } from 'rxjs';
import { UserService } from './user.service';

@Component({
  selector: 'app-user',
  imports: [NgOptimizedImage, AsyncPipe],
  templateUrl: './user.html',
  styleUrl: './user.css',
})

export class User {

  user$!: Observable<UserModel>;

  service = inject(UserService);

  constructor(private route: ActivatedRoute){}

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      const id: number = Number(params.get('id'))
      if(!isNaN(id)){
        this.user$ = this.service.getUser(id);
      }
    });
  }
}
