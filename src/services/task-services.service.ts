import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TaskServicesService {

  constructor(private http: HttpClient) { }

  getTasks() {
    return this.http.get<any>("http://localhost:5500/tasks");
  }

}
