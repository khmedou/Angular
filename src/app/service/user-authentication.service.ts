import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { User } from '../shareddata/user.component';


@Injectable({
  providedIn: 'root'
})
export class UserAuthenticationService {

  constructor(private http : HttpClient) { }


  // POST - USER DATA FROM REGISTRATION FORM TO BACKEND
  registration(user:User){
    
let headers = new HttpHeaders({
  'Content-Type': 'application/json; charset=utf8',
  });
let options = { headers: headers };
    return this.http.post<any>("http://127.0.0.1:8081/signup",JSON.stringify(user),options);

  }
  
  login(username:string,password:string){
    let body= {
      "username":username,
      "password":password
    }
    let headers = new HttpHeaders({
      'Content-Type': 'application/json; charset=utf8',
      });
    let options = { headers: headers };
    console.log(JSON.stringify(body));
        return this.http.post<any>("http://localhost:8081/login",JSON.stringify(body),options);
    
      }
}


