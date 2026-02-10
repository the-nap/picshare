import { inject, Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import config from "../../../../auth_config.json";

@Injectable({providedIn: 'root'})
export class PreviewService {

  private http = inject(HttpClient);

  getResource(id: number): Observable<string> {
    return this.http.get(`${config.apiUri}/post/thumbnail/${id}`, { responseType: 'text' });
  }

  getByTag(tag: string): Observable<number[]> {
    return this.http.get<number[]>(`${config.apiUri}/post/thumbnail/tags/${tag}`, { responseType: 'json' })
  }
}
