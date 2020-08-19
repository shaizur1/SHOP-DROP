import { Component, OnInit } from '@angular/core';
import { ShoppingCartService } from '../../services/shopping-cart.service';
import { Product } from '../../models/product';

@Component({
  selector: 'app-shopping-cart',
  templateUrl: './shopping-cart.component.html',
  styleUrls: ['./shopping-cart.component.scss']
})
export class ShoppingCartComponent implements OnInit {

  products: Product[];
  total = 0;

  constructor(private shoppingCartService: ShoppingCartService) { }

  ngOnInit() {
    this.updateCart();
  }

  updateCart() {
    this.total = this.shoppingCartService.totalPrice();
    this.products = this.shoppingCartService.getProduct();
  }

  incrementProduct(productObject) {
    this.shoppingCartService.incrementProduct(productObject);
    console.log('Product Added!');
    this.updateCart();
  }

  decrementProduct(productObject) {
    this.shoppingCartService.decrementProduct(productObject);
    console.log('Product Removed!');
    this.updateCart();
  }

  removeProduct(productObject) {
    this.shoppingCartService.removeProduct(productObject);
    console.log('Product Deleted!');
    this.updateCart();
  }

  clearCart(event) {
    console.log(event);
    
    this.shoppingCartService.clearCart();
    console.log('Cart Cleard!');
    this.updateCart();
  }

  changeQuantity(event, productObject) {
    const newQuantity = event.target.valueAsNumber;
    if (productObject.quantity < newQuantity) {
      this.incrementProduct(productObject);
    }
    else {      
      this.decrementProduct(productObject);
    }
  }
}
