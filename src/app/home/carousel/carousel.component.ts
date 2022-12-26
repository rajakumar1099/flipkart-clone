import { Component, OnInit, ViewChild } from '@angular/core';
import { NgbCarousel } from '@ng-bootstrap/ng-bootstrap';
import { CarouselImages } from '../services/home.types';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.scss'],
})
export class CarouselComponent implements OnInit {
  /* Carousel variables */
  public carouselImages: CarouselImages[] | undefined;
  // images = [62, 83, 466, 965, 982, 1043, 738].map((n) => `https://picsum.photos/id/${n}/1304/280`);
  @ViewChild('carousel', { static: true }) carousel: NgbCarousel | undefined;
  public showCarouselArrows: boolean = true;
  constructor() {}

  ngOnInit(): void {
    this.carouselImages = [
      {
        id: '1',
        image: '../../assets/carousel-1.webp',
        link: '/',
      },
      {
        id: '2',
        image: '../../assets/carousel-2.webp',
        link: '/',
      },
      {
        id: '3',
        image: '../../assets/carousel-3.webp',
        link: '/',
      },
      {
        id: '4',
        image: '../../assets/carousel-4.webp',
        link: '/',
      },
      {
        id: '5',
        image: '../../assets/carousel-5.webp',
        link: '/',
      },
    ];
    if (this.carouselImages.length <= 1) {
      this.showCarouselArrows = false;
    }
  }
}
