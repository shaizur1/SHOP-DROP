import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HttpRequestsService {

  products = 'Products';
  messages = 'Messages';

  constructor(private http: HttpClient) { }

  getProducts() {
    return this.http.get(`${this.products}`);
  }

  getProductByID(id) {
    return this.http.get(`${this.products}/get/${id}`);
  }

  addProduct(name, company, description, price, image){
    const addProductObject = {
      name: name,
      company: company,
      description: description,
      price: price,
      image: image
    };
    this.http.post(`${this.products}/add`, addProductObject).subscribe(res => console.log(res));
  }

  updateProduct(id, name, company, description, price, image) {
    const updateProductObject = {
      name: name,
      company: company,
      description: description,
      price: price,
      image: image
    }
    this.http.put(`${this.products}/update/${id}`, updateProductObject).subscribe(res => console.log(res));
  }

  deleteProduct(id) {
    return this.http.get(`${this.products}/delete/${id}`).subscribe(res => console.log(res));
  }

  sendMessage() {
    this.http.post(`${this.messages}/send`, "Test").subscribe(res => console.log(res));
  }
}
