import { inject, Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { environment } from "../../../environments/environment";

@Injectable({providedIn: 'root'})
export class PreviewService {

  private http = inject(HttpClient);

  getResource(id: number): Observable<string> {
    return this.http.get(`${environment.apiUrl}/post/thumbnail/${id}`, { responseType: 'text' });
  }

  getByTag(tag: string): Observable<number[]> {
    return this.http.get<number[]>(`${environment.apiUrl}/post/thumbnail/tags/${tag}`, { responseType: 'json' })
  }
}
