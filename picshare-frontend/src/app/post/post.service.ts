import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { environment } from "../../environments/environment";

@Injectable({providedIn: "root"})
export class PostService {

  apiUrl: string = environment.apiUrl + "image/";

  constructor(private http:HttpClient){}

  getResource(id: string): Observable<Blob> {
    return this.http.get(`${this.apiUrl}blob/` + id, { responseType: 'blob' });
  }

  getUsername(id: string): Observable<string> {
    return this.http.get(`${this.apiUrl}user/` + id, { responseType: 'text' });
  }

  getDescription(id: string): Observable<string> {
    return this.http.get(`${this.apiUrl}description/` + id, { responseType: 'text' });

  }
}
