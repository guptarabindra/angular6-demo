import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';

import { GetCustomersService } from './shared/services/get-customers.service';
import { UserService } from './shared/services/user.service';

import { AppComponent } from './app.component';
import { UserComponent } from './components/user/user.component';
import { CustomersComponent } from './components/customers/customers.component';
import { SignInComponent } from './components/user/sign-in/sign-in.component';
import { SignUpComponent } from './components/user/sign-up/sign-up.component';

let routes : Routes = [
  {
    path : "user",
    component : UserComponent
  },
  {
    path : "customers",
    component : CustomersComponent
  },
  {
    path : "signup",
    component : SignUpComponent
  },
  {
    path : "login",
    component : SignInComponent
  }
]

@NgModule({
  declarations: [
    AppComponent,
    UserComponent,
    CustomersComponent,
    SignInComponent,
    SignUpComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(routes),
    HttpClientModule
  ],
  providers: [GetCustomersService, UserService],
  bootstrap: [AppComponent]
})
export class AppModule { }
