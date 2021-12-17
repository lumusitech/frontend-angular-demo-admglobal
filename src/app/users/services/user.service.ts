import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable, of, tap } from 'rxjs';
import { User } from '../models/user';

// Mock data
const USERS: User[] = [
  {
    id: 1,
    name: "Carlos",
    lastname: "Diaz",
    email: "cardiaz@email.com",
    tel: "1122002200",
    pass: "1234"
  },
  {
    id: 2,
    name: "Luciano",
    lastname: "Pérez",
    email: "lucperez@email.com",
    tel: "1122002200",
    pass: "1234"
  },
  {
    id: 3,
    name: "Marcos",
    lastname: "Sánchez",
    email: "marsanchez@email.com",
    tel: "1122002200",
    pass: "1234"
  },
  {
    id: 4,
    name: "Luis",
    lastname: "Gómez",
    email: "luisgomez@email.com",
    tel: "1122002200",
    pass: "1234"
  },
  {
    id: 5,
    name: "Elías",
    lastname: "Ruiz",
    email: "eliruiz@email.com",
    tel: "1122002200",
    pass: "1234"
  },
  {
    id: 6,
    name: "Mariano",
    lastname: "Ponce",
    email: "marianoponce@email.com",
    tel: "1122002200",
    pass: "1234"
  },
  {
    id: 7,
    name: "Fabián",
    lastname: "Gutiérrez",
    email: "fabgutierrez@email.com",
    tel: "1122002200",
    pass: "1234"
  },
  {
    id: 8,
    name: "Gladys",
    lastname: "Durán",
    email: "gladuran@email.com",
    tel: "1122002200",
    pass: "1234"
  },
  {
    id: 9,
    name: "María",
    lastname: "Fernández",
    email: "marifernandez@email.com",
    tel: "1122002200",
    pass: "1234"
  },
  {
    id: 10,
    name: "Eliana",
    lastname: "Saucedo",
    email: "elisaucedo@email.com",
    tel: "1122002200",
    pass: "1234"
  },
  {
    id: 11,
    name: "Julián",
    lastname: "Rosas",
    email: "jurosas@email.com",
    tel: "1122002200",
    pass: "1234"
  },
  {
    id: 12,
    name: "Melanie",
    lastname: "Céspedes",
    email: "melucespedes@email.com",
    tel: "1122002200",
    pass: "1234"
  },
  {
    id: 13,
    name: "Adrián",
    lastname: "Britos",
    email: "adbritos@email.com",
    tel: "1122002200",
    pass: "1234"
  },
  {
    id: 14,
    name: "Brian",
    lastname: "Palacios",
    email: "brapalacios@email.com",
    tel: "1122002200",
    pass: "1234"
  },
  {
    id: 15,
    name: "Mariana",
    lastname: "Acevedo",
    email: "marianacevedo@email.com",
    tel: "1122002200",
    pass: "1234"
  }
]

@Injectable({
  providedIn: 'root'
})
export class UserService {

  // url_base: string = 'http://localhost:3000/users';
  users: User[] = USERS;

  // constructor(private http: HttpClient) { }
  constructor() { }

  save(user: any) {
    this.getAll().subscribe(users => {
      const id = users.length + 1;
      const newUser = { id, ...user }
      this.users.push(newUser);
    })
    // this.http.post<User>(`${this.url_base}`, {...user});
  }

  getById(id: number): Observable<User> {
    return of(this.users[id - 1]);
    // return this.http.get<User>(`${this.url_base}/${id}`);
  }

  getAll(): Observable<User[]> {
    return of(this.users);
    // return this.http.get<User[]>(`${this.url_base}`);
  }

  update(id: number, user: User) {
    this.users[id - 1] = user;
  }

  deleteById(id: number) {
    this.users = this.users.filter(u => u.id !== id);
  }
}
