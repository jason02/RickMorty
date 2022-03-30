import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RestService {

  constructor(private http: HttpClient) {}



  public get(): Observable<any> {
    return this.http.get("https://rickandmortyapi.com/api/character");
  }

  public getEpisode(url:string): Observable<any> {
    return this.http.get(url);
  }

  public getLocation(url:string): Observable<any> {
    console.log(url);
    return this.http.get(url);
  }

  public getPage(url:string): Observable<any> {
    return this.http.get(url);
  }
}
