import { Injectable } from '@angular/core';
import { Http,Headers, RequestOptions } from '@angular/http';
 import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import { Router } from '@angular/router';

@Injectable()
export class LoginServiceService {
 
  constructor( 
    private http: Http,
    private router:Router
  ) { }

  login(email,password): Observable<any>{
    console.log(email,password);    
    return this.http.get(      
      `http://localhost:8080/userLogin?email=${email}&password=${password}`);
           
  }
 
}
 
 