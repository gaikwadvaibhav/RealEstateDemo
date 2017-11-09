import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MyRoutingModule } from './router';
import {FormsModule} from '@angular/forms';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
// import {Http } from '@angular/http';
import {HttpModule} from '@angular/http';

import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { SearchboxComponent } from './searchbox/searchbox.component';
import { RegisterUserService } from './register/register-user.service';
import { LoginServiceService } from './login/login-service.service';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    RegisterComponent,
    LoginComponent,
    HomeComponent,
    SearchboxComponent
  ],
  imports: [
    BrowserModule,
    MyRoutingModule,
    FormsModule,
    NgbModule.forRoot(),
    HttpModule
  ],
  providers: [RegisterUserService,LoginServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
