import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';
import { Plane } from '../models/plane';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

const httpOptionsUsingUrlEncoded = {
  headers: new HttpHeaders({ 'Content-Type': 'application/x-www-form-urlencoded' })
};

@Injectable({
  providedIn: 'root'
})
export class planesService {

  private endpoint: string = "http://localhost:8080/plane";
  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };
  constructor(private httpClient: HttpClient) { }

  getPlanes(): Observable<Plane[]>{
    return this.httpClient.get<Plane[]>(this.endpoint + "s");
  }

  getPlaneById(id: number): Observable<Plane>{
    return this.httpClient.get<Plane>(this.endpoint + "/" + id);
  }

  createPlane(plane: Plane): Observable<Plane>{
    let bodyEncoded = new URLSearchParams();
    bodyEncoded.append("name", plane.name);
    bodyEncoded.append("year", plane.year.toString());
    const body = bodyEncoded.toString();

    console.log("createPlane")
    console.log(JSON.stringify(plane))
    return this.httpClient.post<Plane>(this.endpoint, body, httpOptionsUsingUrlEncoded);
  }
  

  createPlaneUsingJSON(plane: Plane): Observable<Plane>{
    return this.httpClient.post<Plane>(this.endpoint, JSON.stringify(plane), httpOptions);
  }

  deletePlane(idPlane: number): Observable<Plane>{
    return this.httpClient.delete<Plane>(this.endpoint + "/" + idPlane);
  }
}