import { inject, Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { environment } from "../../../environments/environment";
import { PostModel } from "../../models/post.model";
import { UserModel } from "../../models/user.model";
import { UserService } from "../user-search/user.service";
import config from '../../../../auth_config.json'

@Injectable({providedIn: "root"})
export class PostService {

  private http = inject(HttpClient);
  private userService = inject(UserService)

  getPost(id: number): Observable<PostModel>{
    return this.http.get<PostModel>(`${config.apiUri}/post/media/${id}`)
  }

  getUser(id: string): Observable<UserModel>{
    return this.userService.getUser(id);
  }

  getPostByUser(id: string): Observable<number[]>{
    return this.http.get<number[]>(`${config.apiUri}/posts/${id}`);
  }
}
