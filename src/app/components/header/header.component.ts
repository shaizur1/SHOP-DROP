import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  
  navButtons = [
    {routerLink: '/About', logo: 'About'},
    {routerLink: '/Contact', logo: 'Contact'},
    {routerLink: '/ShoppingCart', logo: 'Cart'}
  ];
}
