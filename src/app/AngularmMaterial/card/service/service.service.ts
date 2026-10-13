import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ServiceService {
  constructor(private http: HttpClient) {}

  getProduct() {
    return this.http.get('https://api.escuelajs.co/api/v1/products?offset=0&limit=12');
  }
}
