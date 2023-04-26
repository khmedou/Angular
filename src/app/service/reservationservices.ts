import { Injectable } from "@angular/core";
import { Observable } from "rxjs";

import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Reservation } from "../model/reservation";
import { environment } from "../environments/environment";
import { AnyCatcher } from "rxjs/internal/AnyCatcher";

@Injectable({
  providedIn: 'root'
})

export class ReservationService {

  private apiServerUrl = environment.apiBaseUrl;

  constructor(private http: HttpClient) { }

  public getReservations(): Observable<Reservation[]> {
    return this.http.get<Reservation[]>(`${this.apiServerUrl}reservations`);
  }

  public addReservation(Reservation: AnyCatcher): Observable<Reservation> {
    let headers = new HttpHeaders({
        'Content-Type': 'application/json; charset=utf8',
        });
      let options = { headers: headers };
    return this.http.post<Reservation>(`${this.apiServerUrl}reservations`, JSON.stringify(Reservation),options);
  }

  public updateReservation(Reservation: Reservation, ReservationId: string): Observable<Reservation> {
    return this.http.put<Reservation>(`${this.apiServerUrl}reservations/${ReservationId}`, Reservation);
  }

  public deleteReservation(ReservationId: number): Observable<String> {
    console.log(`${this.apiServerUrl}reservations/${ReservationId}`)
   return  this.http.delete<String>(`${this.apiServerUrl}reservations/${ReservationId}`);
  
  }
}