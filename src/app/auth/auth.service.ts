import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AuthData } from './auth.data.model';

@Injectable({ providedIn: 'root' })
export class AuthService {

  constructor(private http: HttpClient) {}

  createUser(email: string, username: string, password: string) {
    const authData: AuthData = {
      email: email,
      password: password
      // username: username
    };

    this.http.post('http://localhost:3000/api/user/signup', authData)
    .subscribe(resp => {
      console.log('resp is: ', resp);
    });
  }
}

