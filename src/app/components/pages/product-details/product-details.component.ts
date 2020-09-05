import { Component, OnInit, OnDestroy } from '@angular/core';
import { HttpRequestsService } from 'src/app/services/http-requests.service';
import { ShoppingCartService } from '../../../services/shopping-cart.service';
import { ActivatedRoute } from '@angular/router';
import { Product } from '../../../models/product'
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.scss']
})
export class ProductDetailsComponent implements OnInit, OnDestroy {

  product: any = {};
  products: Product[];
  randomProducts = [];
  quantity;
  paramsSub: Subscription;
  productSub: Subscription;
  productsSub: Subscription;

  constructor(private httpRequestsService: HttpRequestsService, private shoppingCartService: ShoppingCartService, private route: ActivatedRoute) { }

  ngOnInit() {
    this.paramsSub = this.route.params.subscribe((params) => {
      this.productSub = this.httpRequestsService.getProductByID(params['id']).subscribe((res) => {
        this.product = res;
        if (this.products) {
          this.getRandomProducts();          
        }
        this.quantity = 1;
      });
    });
    this.productsSub = this.httpRequestsService.getProducts().subscribe((data: Product[]) => {
      this.products = data;
      this.getRandomProducts();
    });
  }

  addToCart(productObject) {
    this.shoppingCartService.addProduct(productObject, this.quantity);
    console.log('Product added!');
  }

  getRandomProducts() {
    this.randomProducts = [];
    for (let i = 0; i < 4; i++) {
      const randomProduct = this.products[Math.floor(Math.random() * this.products.length)];
      if (randomProduct.name === this.product.name || this.randomProducts.includes(randomProduct)) {
        i--;
      }
      else {
        this.randomProducts.push(randomProduct);
      }
    }
  }

  ngOnDestroy() {
    this.paramsSub.unsubscribe();
    this.productSub.unsubscribe();
    this.productsSub.unsubscribe();
  }
}