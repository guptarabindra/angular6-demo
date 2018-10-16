import { Component } from '@angular/core';
import { UserService } from './shared/services/user.service';
import { HttpErrorResponse } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Internal Products Board';
  isLoginError : boolean = false;
  constructor(private userService : UserService,private router : Router) { }

  OnSubmit(userName,password){
    this.userService.userAuthentication(userName,password).subscribe((data : any)=>{
     localStorage.setItem('userToken',data.access_token);
     //console.log(localStorage.getItem('userToken'));
     console.log('success');
     this.router.navigate(['/user']);
   },
   (err : HttpErrorResponse)=>{
     this.isLoginError = true;
   });
 }
}
