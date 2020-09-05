import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { Product } from '../../../models/product';
import { HttpRequestsService } from '../../../services/http-requests.service';

@Component({
  selector: 'app-products-list',
  templateUrl: './products-list.component.html',
  styleUrls: ['./products-list.component.scss']
})
export class ProductsListComponent implements OnInit, OnDestroy {

  products: Product[];
  subscription: Subscription;

  constructor(private httpRequestsService: HttpRequestsService) { }

  ngOnInit() {
    this.subscription = this.httpRequestsService.getProducts().subscribe((data: Product[]) => {
      this.products = data;
    });
  }

  deleteProduct(id) {
    this.httpRequestsService.deleteProduct(id);
    this.httpRequestsService.getProducts().subscribe((data: Product[]) => {
      this.products = data;
    });
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

}
