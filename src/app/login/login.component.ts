import { Component, OnInit } from '@angular/core';
import { LoginServiceService } from './login-service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor( private loginservice: LoginServiceService,
  private router: Router )  { }

  ngOnInit() {
  }

  onLogin(email,password){
    console.log(email,password);
    this.loginservice.login(email,password).subscribe(res => console.log(res));
  }
}
