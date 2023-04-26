import { Injectable } from "@angular/core";
import { Observable } from "rxjs";

import { HttpClient } from '@angular/common/http';

import { Vol } from "../model/vols";
import { environment } from "../environments/environment";

@Injectable({
  providedIn: 'root'
})

export class VolService {

  private apiServerUrl = environment.apiBaseUrl;

  constructor(private http: HttpClient) { }

  public getVols(): Observable<Vol[]> {
    return this.http.get<Vol[]>(`${this.apiServerUrl}vols`);
  }

  public addVol(vol: Vol): Observable<Vol> {
    return this.http.post<Vol>(`${this.apiServerUrl}vols`, vol);
  }

  public updateVol(vol: Vol, volId: string): Observable<Vol> {
    return this.http.put<Vol>(`${this.apiServerUrl}vols/${volId}`, vol);
  }

  public deleteVol(volId: number): Observable<String> {
    console.log(`${this.apiServerUrl}vols/${volId}`)
   return  this.http.delete<String>(`${this.apiServerUrl}vols/${volId}`);
  
  }
}