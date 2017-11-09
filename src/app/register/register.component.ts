import { Component, OnInit } from '@angular/core';
import { User } from './user';
import { RegisterUserService } from './register-user.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

   constructor(
     private registerUser :RegisterUserService
     ) { }

  ngOnInit() {
  }

  register(myForm){
    console.log(myForm.value);
    var user : User = new User();
    user.name = myForm.value.name;
    user.email = myForm.value.email;
    user.mobile = myForm.value.mobile;
    user.password = myForm.value.password;
    user.comfirmpassword = myForm.value.comfirmpassword;
    user.optradio = myForm.value.optradio;

    this.registerUser.Register(user).subscribe(res => console.log(res));
    


  }

}
