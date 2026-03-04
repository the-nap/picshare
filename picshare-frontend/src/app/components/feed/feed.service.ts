import { inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment';

@Injectable({providedIn: 'root',})
export class FeedService {

  private http = inject(HttpClient);

  getFeed(user: string): Observable<number[]>{
    return this.http.get<number[]>(`${environment.apiUrl}/feed/${user}`,{ responseType: "json" });
  }
}
