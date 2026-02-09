import { inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../environments/environment';
import { Observable } from 'rxjs';

@Injectable({providedIn: 'root',})
export class FeedService {

  apiUrl: string = environment.apiUrl + "feed/";
  private http = inject(HttpClient);

  getFeed(user: string): Observable<number[]>{
    return this.http.get<number[]>(`${this.apiUrl}` + user, { responseType: "json" });
  }
}
