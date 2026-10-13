import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ServiceService {
  constructor(private ht: HttpClient) {}

  get() {
    return this.ht.get('assets/employees.json');
  }
}
