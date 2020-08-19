import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProductDetailsService {

  uri = 'http://localhost:3000/Products';

  constructor(private http: HttpClient) { }

  getProduct(id) {
    return this.http.get(`${this.uri}/get/${id}`);
  }
}
