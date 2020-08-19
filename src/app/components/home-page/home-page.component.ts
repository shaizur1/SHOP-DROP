import { Component, OnInit, OnDestroy } from '@angular/core';
import { HomePageService } from '../../services/home-page.service';
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
  carouselData = [
    {src: '../../../assets/background5.jpg', alt: 'first slide'},
    {src: '../../../assets/background7.jpg', alt: 'second slide'},
    {src: '../../../assets/background8.jpg', alt: 'third slide'}
  ];

  constructor(private homePageService: HomePageService) { 
    this.paging = {
      itemsPerPage: 4, 
      currentPage: 1,
      totalItems: 12
    };
  }

  ngOnInit() {
    this.subscription = this.homePageService.getProducts().subscribe((data: Product[]) => {
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
