import { inject, Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { environment } from "../../../environments/environment";
import { PostModel } from "../../models/post.model";
import { UserModel } from "../../models/user.model";

@Injectable({providedIn: "root"})
export class PostService {

  apiUrl: string = environment.apiUrl + "posts/";
  private http = inject(HttpClient);

  getPost(id: number): Observable<PostModel>{
    return this.http.get<PostModel>(this.apiUrl + id)
  }

  getUser(id: number): Observable<UserModel>{
    return this.http.get<UserModel>(this.apiUrl + id)
  }
}
