import { inject, Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { environment } from "../../../environments/environment";
import { PostModel } from "../../models/post.model";

@Injectable({providedIn: "root"})
export class PostService {

  apiUrl: string = environment.apiUrl + "image/";
  private http = inject(HttpClient);

  getPost(id: number): Observable<PostModel>{
    return this.http.get<PostModel>(this.apiUrl + id)
  }

  getUsername(id: string): Observable<string> {
    return this.http.get(`${this.apiUrl}user/` + id, { responseType: 'text' });
  }

  getDescription(id: string): Observable<string> {
    return this.http.get(`${this.apiUrl}description/` + id, { responseType: 'text' });

  }
}
