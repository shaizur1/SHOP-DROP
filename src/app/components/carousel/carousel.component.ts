import { Component, OnInit, Input } from '@angular/core';
import { NgbCarouselConfig } from '@ng-bootstrap/ng-bootstrap';


@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.scss']
})
export class CarouselComponent implements OnInit {

  @Input() carouselArray;

  constructor(private carousel: NgbCarouselConfig) { }

  ngOnInit() {
    this.initCarousel();
  }

  private initCarousel() {
    this.carousel.interval = 3500;
    this.carousel.wrap = true;
    this.carousel.pauseOnHover = false;
  }
}
