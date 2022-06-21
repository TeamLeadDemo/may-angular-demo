import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from './user.model';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  //baseUrl: string = "http://localhost:7474/users";

  baseUrl: string = "http://ec2-52-90-78-48.compute-1.amazonaws.com:8484/users";

  
  constructor(private http: HttpClient) { }

  validateUser(user: User): Observable<User>{
    return this.http.post<User>(this.baseUrl, user);
  }
}
