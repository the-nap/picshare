import { HttpClient } from "@angular/common/http";
import { inject, Injectable } from "@angular/core";
import { environment } from "../../../environments/environment";
import { UserModel } from "../../models/user.model";
import { Observable } from "rxjs";

@Injectable({ providedIn: 'root' })
export class UserService {
  private http = inject(HttpClient)
  private apiUrl =  environment.apiUrl + 'user/';

  getUser(id: string): Observable<UserModel> {
    return this.http.get<UserModel>(this.apiUrl + id);
  }

  getByUsername(username: string): Observable<UserModel[]> {
    return this.http.get<UserModel[]>(this.apiUrl + username);
  }
}
