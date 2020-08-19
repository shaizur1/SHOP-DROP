import { Injectable } from '@angular/core';
import { Product } from '../models/product';

@Injectable({
  providedIn: 'root'
})
export class ShoppingCartService {

  products: Product[];

  constructor() {
    this.products = JSON.parse(sessionStorage.getItem('products')) || [];
  }

  getProduct() {
    return this.products;
  }

  setProduct() {
    sessionStorage.setItem('products', JSON.stringify(this.products));
  }

  addProduct(productObject, amount) {
    const product = this.products.find(product => product.name === productObject.name);
    if(product) {
      product.quantity += amount;
    }
    else {
      productObject.quantity = amount; 
      this.products.push(productObject);
    }
    this.setProduct();
  }

  incrementProduct(ProductObject) {
    const product = this.products.find(product => product.name === ProductObject.name);
      if(product) { 
         product.quantity += 1;
      }
    this.setProduct();
  }
  
  decrementProduct(ProductObject) {
    const product = this.products.find(product => product.name === ProductObject.name);
      if(product) { 
        if(product.quantity === 1) {
          return;
        }
        else {
          product.quantity -= 1;
        }
      }
    this.setProduct();    
  }

  removeProduct(ProductObject) {
    const index = this.products.findIndex(product => product.name === ProductObject.name);
    if(index >= 0) {
      this.products.splice(index, 1);
    }
    this.setProduct();
  }

  totalPrice() {
    let sum = 0;
    this.products.forEach(product => {
      sum += product.price * product.quantity;
    });
    return sum;
  }

  clearCart() {
    sessionStorage.removeItem('products');
    this.products = [];
  }
}