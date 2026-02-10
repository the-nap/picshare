import { inject, Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { environment } from "../../../environments/environment";

@Injectable({providedIn: 'root'})
export class PreviewService {

  apiUrl: string = environment.api.serverUrl + "post/thumbnail/";
  private http = inject(HttpClient);

  getResource(id: number): Observable<string> {
    return this.http.get(this.apiUrl + id, { responseType: 'text' });
  }

  getByTag(tag: string): Observable<number[]> {
    return this.http.get<number[]>(this.apiUrl + tag, { responseType: 'json' })
  }
}
