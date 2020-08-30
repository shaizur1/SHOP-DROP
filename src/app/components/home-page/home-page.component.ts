import { Component, OnInit, OnDestroy } from '@angular/core';
import { DatabaseService } from '../../services/database.service';
import { Product } from '../../models/product';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent implements OnInit, OnDestroy {

  public search: any = '';
  products: Product[];
  paging: any;
  subscription: Subscription;

  constructor(private databaseService: DatabaseService) { 
    this.paging = {
      itemsPerPage: 4, 
      currentPage: 1,
      totalItems: 12
    };
  }

  ngOnInit() {
    this.subscription = this.databaseService.getProducts().subscribe((data: Product[]) => {
      this.products = data;
    });
  }

  changPage(event){
    this.paging.currentPage = event;
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}
