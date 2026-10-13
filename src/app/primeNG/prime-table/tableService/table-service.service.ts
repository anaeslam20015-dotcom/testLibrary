import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class TableServiceService {
  constructor(private http: HttpClient) {}

  getEmployees() {
    return this.http.get('assets/employees.json');
  }
}
