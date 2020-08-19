import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HomePageService {

  uri = 'http://localhost:3000/Products';

  constructor(private http: HttpClient) { }

  getProducts() {
    return this.http.get(`${this.uri}`);
  }
}

