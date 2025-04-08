import { Injectable } from '@angular/core';

import { HttpClient, HttpHeaders } from '@angular/common/http';

import {  Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

 import { User } from '../interface/user';


@Injectable({
  providedIn: 'root'
})
export class ApiService {

  private apiURL = "http://localhost/api-laravel/public/api/";

  httpOptions = {
     headers: new HttpHeaders({
       'Content-Type': 'application/json'
     })
  }

  constructor(private httpClient: HttpClient) { }

  login(email: string, password: string): Observable<any> {   
    return this.httpClient.post(`${this.apiURL}login`, { email, password });
  }

  getAll(): Observable<User[]> {
    return this.httpClient.get<User[]>(this.apiURL+"users")
    // .pipe(
    //   catchError(this.errorHandler)
    // )
  }

  deleteItem(id: number){
    console.log("service delete=>",id);
    
    const url = `${this.apiURL}producto/${id}`;
    return this.httpClient.delete(url);
  }

  showItem(id: number){
    console.log("service edit=>",id);
    
    const url = `${this.apiURL}producto/${id}`;
    return this.httpClient.get(url);
  }


}
