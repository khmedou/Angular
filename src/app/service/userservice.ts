import { Injectable } from "@angular/core";
import { Observable } from "rxjs";

import { HttpClient } from '@angular/common/http';

import { environment } from "../environments/environment";
import { User } from "../model/user";

@Injectable({
  providedIn: 'root'
})

export class Useresrvice {

  private apiServerUrl = environment.apiBaseUrl;

  constructor(private http: HttpClient) { }

  public getUser(): Observable<User[]> {
    return this.http.get<User[]>(`${this.apiServerUrl}users`);
  }

  public addUSER(USER: User): Observable<User> {
    return this.http.post<User>(`${this.apiServerUrl}signup`, USER);
  }

  public updateUSER(USER: User, USERId: string): Observable<User> {
    return this.http.put<User>(`${this.apiServerUrl}users/${USERId}`, USER);
  }

  public deleteUSER(USERId: number): Observable<String> {
    console.log(`${this.apiServerUrl}User/${USERId}`)
   return  this.http.delete<String>(`${this.apiServerUrl}user/${USERId}`);
  
  }
}