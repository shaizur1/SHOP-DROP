import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HttpRequestsService {

  products = 'http://localhost:3000/Products';
  messages = 'http://localhost:3000/Messages';

  constructor(private http: HttpClient) { }

  getProducts() {
    return this.http.get(`${this.products}`);
  }

  getProductByID(id) {
    return this.http.get(`${this.products}/get/${id}`);
  }

  addProduct(name, company, description, price, image){
    const productObject = {
      name: name,
      company: company,
      description: description,
      price: price,
      image: image
    };
    this.http.post(`${this.products}/add`, productObject).subscribe(res => console.log('Product Added Successfuly' + res));
  }

  sendMessage() {
    this.http.post(`${this.messages}/send`, "Test").subscribe(res => console.log(res));
   
    //Timeout for page reload after successful submit of the form
    setTimeout(() => {
      location.reload();
    }, 3000);
  }
}
