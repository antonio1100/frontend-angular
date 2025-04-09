import { Injectable } from '@angular/core';

import { HttpClient, HttpHeaders } from '@angular/common/http';

import {  Observable, throwError } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';

 import { User } from '../interface/user';


@Injectable({
  providedIn: 'root'
})
export class ApiService {

  private apiURL = "http://localhost/api-laravel/public/api/";

  private getAuthHeaders(): HttpHeaders {
    const token = this.getToken();
    return new HttpHeaders({
      Authorization: `Bearer ${token}`,
      Accept: 'application/json'
    });
  }

  constructor(private httpClient: HttpClient) { }

  login(email: string, password: string): Observable<any> {
    return this.httpClient.post(`${this.apiURL}auth/login`, { email, password }).pipe(
      tap((res: any) => {
        if (res.token) {
          localStorage.setItem('token', res.token);
          console.log("localStorage",localStorage.setItem('token', res.token));
          
        }
      })
    );
  }

  logout(): Observable<any> {
    return this.httpClient.post(`${this.apiURL}auth/logout`, {}, {
      headers: this.getAuthHeaders()
    }).pipe(
      tap(() => localStorage.removeItem('token'))
    );
  }

  isAuthenticated(): boolean {
    return !!localStorage.getItem('token');
  }

  getToken(): string | null {
    return localStorage.getItem('token');
  }



  getUser(): Observable<any> {
    return this.httpClient.get(`${this.apiURL}auth/me`, {
      headers: this.getAuthHeaders()
    });
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
