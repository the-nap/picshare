import { inject, Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { environment } from "../../../environments/environment";

@Injectable({providedIn: 'root'})
export class PreviewService {

  apiUrl: string = environment.apiUrl + "post/thumbnail/";
  private http = inject(HttpClient);

  getResource(id: string): Observable<string> {
    return this.http.get(this.apiUrl + id, { responseType: 'text' });
  }

  getByTag(tag: string): Observable<string[]> {
    return this.http.get<string[]>(this.apiUrl + tag, { responseType: 'json' })
  }
}
