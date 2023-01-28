import { Component, OnInit } from '@angular/core';
import { HeaderCategories } from '../services/home.types';

@Component({
  selector: 'app-header-categories',
  templateUrl: './header-categories.component.html',
  styleUrls: ['./header-categories.component.scss']
})
export class HeaderCategoriesComponent implements OnInit {
  public headerCategories: HeaderCategories[] | undefined;
  constructor() { }

  ngOnInit(): void {
    this.headerCategories = [
      {
        id: '1',
        name: 'Top Offers',
        image: '../../assets/top-offers.webp',
        link: '/'
      },
      {
        id: '2',
        name: 'Mobiles & Tablets',
        image: '../../assets/mobiles-tablets.webp',
        link: '/'
      },
      {
        id: '3',
        name: 'Electronics',
        image: '../../assets/electronics.webp',
        link: '/'
      },
      {
        id: '4',
        name: 'TV & Appliances',
        image: '../../assets/tv-appliances.webp',
        link: '/'
      },
      {
        id: '5',
        name: 'Fashion',
        image: '../../assets/fashion.webp',
        link: '/'
      },
      {
        id: '6',
        name: 'Beauty',
        image: '../../assets/beauty.webp',
        link: '/'
      },
      {
        id: '7',
        name: 'Home & Furniture',
        image: '../../assets/home-furniture.webp',
        link: '/'
      },
      {
        id: '8',
        name: 'Flights',
        image: '../../assets/flight.webp',
        link: '/'
      },
      {
        id: '9',
        name: 'Grocery',
        image: '../../assets/grocery.webp',
        link: '/'
      },
    ]
  }

}
