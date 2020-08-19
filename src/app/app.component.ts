import { Component } from '@angular/core';
import { SlimLoadingBarService } from 'ng2-slim-loading-bar';
import { Event, Router, NavigationCancel, NavigationStart, NavigationError, NavigationEnd } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  title = 'SHOP&DROP';
  navButtons = [
    {routerLink: '/About', logo: 'About'},
    {routerLink: '/Contact', logo: 'Contact'},
    {routerLink: '/ShoppingCart', logo: 'Cart'}
  ];

  constructor(private slimBar: SlimLoadingBarService, private router: Router) {
    this.router.events.subscribe((event: Event) => {
      if(event instanceof NavigationStart) {
        this.navStart(event);
      }
    });
  }

  navStart(event: Event): void {
    if(event instanceof NavigationStart) {
      this.slimBar.complete();
    }
    else if(event instanceof NavigationCancel) {
      this.slimBar.stop();
    }
    else if(event instanceof NavigationError) {
      this.slimBar.stop();
    }
    else if(event instanceof NavigationEnd) {
      this.slimBar.complete();
    }
  }
}
