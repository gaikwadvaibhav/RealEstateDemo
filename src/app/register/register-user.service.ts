import { Injectable } from '@angular/core';
import {Http} from '@angular/http';
import { User } from './user';

@Injectable()
export class RegisterUserService {

  constructor(private http : Http) { }

  Register(user : User){
    console.log(user);
      return this.http.post('http://localhost:8080/userAdd', user);
  }

}
