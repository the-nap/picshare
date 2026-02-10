import { inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import config from '../../../../auth_config.json';

@Injectable({providedIn: 'root',})
export class FeedService {

  private http = inject(HttpClient);

  getFeed(user: string): Observable<number[]>{
    return this.http.get<number[]>(`${config.apiUri}/feed/${user}`,{ responseType: "json" });
  }
}
