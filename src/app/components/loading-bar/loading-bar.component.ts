import { Component, OnInit } from '@angular/core';
import { SlimLoadingBarService } from 'ng2-slim-loading-bar';
import { Event, Router, NavigationCancel, NavigationStart, NavigationError, NavigationEnd } from '@angular/router';

@Component({
  selector: 'app-loading-bar',
  templateUrl: './loading-bar.component.html',
  styleUrls: ['./loading-bar.component.scss']
})
export class LoadingBarComponent implements OnInit {

  constructor(private slimBar: SlimLoadingBarService, private router: Router) { }
  
  ngOnInit() {
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
