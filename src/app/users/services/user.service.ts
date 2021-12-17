import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '../models/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  url_base: string = 'http://localhost:3000';
  users: User[] = [];

  constructor(private http: HttpClient) { }

  save(user: User) {
    //!TODO not implemented
    console.log(user, 'user saved');
  }

  getById(id: number) {
    return this.http.get<User>(`${this.url_base}/users/${id}`);
  }

  getAll(): Observable<User[]> {
    return this.http.get<User[]>(`${this.url_base}/users`);
  }

  update(id: number, user: User) {

  }

  deleteById(id: number) {

  }
}
