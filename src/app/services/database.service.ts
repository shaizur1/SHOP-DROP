import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DatabaseService {

  products = 'http://localhost:3000/Products';

  constructor(private http: HttpClient) { }

  getProducts() {
    return this.http.get(`${this.products}`);
  }

  getProductByID(id) {
    return this.http.get(`${this.products}/get/${id}`);
  }
}
