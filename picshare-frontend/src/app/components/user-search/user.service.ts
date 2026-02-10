import { HttpClient } from "@angular/common/http";
import { inject, Injectable } from "@angular/core";
import { UserModel } from "../../models/user.model";
import { Observable } from "rxjs";
import config from "../../../../auth_config.json";

@Injectable({ providedIn: 'root' })
export class UserService {
  private http = inject(HttpClient)

  getUser(id: string): Observable<UserModel> {
    return this.http.get<UserModel>(`${config.apiUri}/user/${id}`);
  }

  getByUsername(username: string): Observable<UserModel[]> {
    return this.http.get<UserModel[]>(`${config.apiUri}/user/name/${username}`);
  }
}
