import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { environment } from "../../environments/environment";

@Injectable({providedIn: 'root'})
export class PreviewService {

  apiUrl: string = `${environment.apiUrl}thumbnail/`;

  constructor(private http:HttpClient){}

  getResource(id: string): Observable<Blob> {
    return this.http.get(`${this.apiUrl}` + id, { responseType: 'blob' });
  }
}
