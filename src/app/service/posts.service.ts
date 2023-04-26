import { Injectable } from '@angular/core';
import {  HttpClient, HttpHeaders } from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class PostsService {

  constructor(private http: HttpClient) { }

 public getvole(){
    let mydata = this.http.get<any>("http://127.0.0.1:8081/vols");
    return mydata;
  }
  public postReserve(data:any){
  let headers = new HttpHeaders({
    'Content-Type': 'application/json; charset=utf8',
    }); 
  let options = { headers: headers };
      return this.http.post<any>("http://127.0.0.1:8081/reservations",data,options);
  
    }
    public deletevole(id:string){
      console.log("http://127.0.0.1:8081/vols/"+id)
          return this.http.delete<any>("http://127.0.0.1:8081/vols/"+id);
      
        }
}
