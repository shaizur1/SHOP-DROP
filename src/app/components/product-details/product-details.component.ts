import { Component, OnInit, OnDestroy } from '@angular/core';
import { ProductDetailsService } from 'src/app/services/product-details.service';
import { ShoppingCartService } from '../../services/shopping-cart.service';
import { HomePageService } from '../../services/home-page.service';
import { ActivatedRoute } from '@angular/router';
import { Product } from '../../models/product'
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
  subscription: Subscription;

  constructor(private productDetailsService: ProductDetailsService,
    private shoppingCartService: ShoppingCartService,
    private homePageService: HomePageService,
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    this.subscription = this.route.params.subscribe((params) => {
      this.productDetailsService.getProduct(params['id']).subscribe((res) => {
        this.product = res;
        if (this.products) {
          this.getRandomProducts();          
        }
        this.quantity = 1;
      });
    });
    this.subscription = this.homePageService.getProducts().subscribe((data: Product[]) => {
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
    for (let i = 0; i < 3; i++) {
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
    this.subscription.unsubscribe();
  }
}