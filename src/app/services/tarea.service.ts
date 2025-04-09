import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Tarea } from '../interface/tarea';

@Injectable({
  providedIn: 'root'
})
export class TareaService {

  private apiUrl = 'http://localhost/api-laravel/public/api';

  constructor(private http: HttpClient) {}

  getTasks(): Observable<Tarea[]> {
    return this.http.get<Tarea[]>(`${this.apiUrl}/tareas`);
  }

  getTask(id: number): Observable<Tarea> {
    return this.http.get<Tarea>(`${this.apiUrl}/${id}`);
  }

  createTask(task: Tarea): Observable<Tarea> {
    return this.http.post<Tarea>(`${this.apiUrl}/tarea`, task);
  }

  updateTask(id: number, task: Tarea): Observable<Tarea> {
    return this.http.put<Tarea>(`${this.apiUrl}/${id}`, task);
  }

  deleteTask(id: number): Observable<any> {
    return this.http.delete(`${this.apiUrl}/${id}`);
  }

}
