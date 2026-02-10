import { inject, Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { environment } from "../../../environments/environment";
import { PostModel } from "../../models/post.model";
import { UserModel } from "../../models/user.model";
import { UserService } from "../user-search/user.service";

@Injectable({providedIn: "root"})
export class PostService {

  apiUrl: string = environment.api.serverUrl + "post/";
  private http = inject(HttpClient);
  private userService = inject(UserService)

  getPost(id: number): Observable<PostModel>{
    return this.http.get<PostModel>(this.apiUrl + "media/" +id)
  }

  getUser(id: string): Observable<UserModel>{
    return this.userService.getUser(id);
  }

  getPostByUser(id: string): Observable<number[]>{
    return this.http.get<number[]>(this.apiUrl + "posts/" + id);
  }
}
