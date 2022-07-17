import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Boat } from '../model/boat.model'

@Injectable({
  providedIn: 'root'
})
export class BoatService {

  constructor(private http: HttpClient) { }

  getAllBoats(): Observable<Boat[]> {
    return this.http.get<Boat[]>(`${environment.angularBackendUrl}/getAllBoats`)
  }

  createBoat(boat: Boat): Observable<Boat> {
    return this.http.post<Boat>(`${environment.angularBackendUrl}`, boat);
  }

  getBoat(id: string): Observable<Boat> {
    return this.http.get<Boat>(`${environment.angularBackendUrl}/${id}`)
  }

  updateBoat(boat: Boat): Observable<Boat> {
    return this.http.put<Boat>(`${environment.angularBackendUrl}`, boat)
  }

  deleteBoat(id: string): Observable<Boat> {
    return this.http.delete<Boat>(`${environment.angularBackendUrl}/${id}`)
  }

}