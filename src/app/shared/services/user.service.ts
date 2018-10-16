import { Injectable } from '@angular/core';
import { HttpClient, HttpHandler, HttpHeaders } from '@angular/common/http';
import { Response } from "@angular/http";
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  UserName: string;
  Password: string;
  data: any;
  constructor(private http: HttpClient) { }
  userAuthentication(UserName, Password){
    var data="username="+UserName+"&password="+Password+
    "&grant_type=password&client_id=2&client_secret=mkfocZe4QYKh8P1wOU8LVtXULY0PRdkylIstw6Hn";
    var reqHeader= new HttpHeaders({'Content-Type' : 'application/x-www-form-urlencoded', 'No-Auth':'True'});
    return this.http.post('http://cas.service/v1/oauth/token', data, { headers: reqHeader });
  }
}
