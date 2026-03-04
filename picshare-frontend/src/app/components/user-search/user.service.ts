import { HttpClient } from "@angular/common/http";
import { inject, Injectable } from "@angular/core";
import { UserModel } from "../../models/user.model";
import { Observable } from "rxjs";
import { environment } from "../../../environments/environment";

@Injectable({ providedIn: 'root' })
export class UserService {
  private http = inject(HttpClient)

  getUser(id: string): Observable<UserModel> {
    return this.http.get<UserModel>(`${environment.apiUrl}/user/${id}`);
  }

  getByUsername(username: string): Observable<UserModel[]> {
    return this.http.get<UserModel[]>(`${environment.apiUrl}/user/name/${username}`);
  }
}
