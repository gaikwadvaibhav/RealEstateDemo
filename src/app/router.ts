import { RegisterComponent } from "./register/register.component";
import { LoginComponent } from "./login/login.component";
import { RouterModule, Routes } from "@angular/router";


const routes: Routes = [
    // { path: '', redirectTo:'/register', pathMatch:'full' },
    { path: 'register', component: RegisterComponent },
    { path: 'login', component: LoginComponent }
    
  ];

  export const MyRoutingModule = RouterModule.forRoot(routes);