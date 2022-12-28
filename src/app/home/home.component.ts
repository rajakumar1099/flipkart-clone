import { Component, OnInit } from '@angular/core';
import { ProductDetails } from './services/home.types';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  public productList: ProductDetails | undefined
  constructor() { }

  ngOnInit(): void {
    this.productList = {
      productTitle: 'All Offers',
      products: [{
        productID: '1',
        productName: 'Monitor',
        productBrand: 'Acer',
        productImage: '../../../assets/monitor.webp',
        productPrice: '7999'
      },
      {
        productID: '1',
        productName: 'Monitor',
        productBrand: 'Acer',
        productImage: '../../../assets/monitor.webp',
        productPrice: '7999'
      },
      {
        productID: '1',
        productName: 'Monitor',
        productBrand: 'Acer',
        productImage: '../../../assets/monitor.webp',
        productPrice: '7999'
      },
      {
        productID: '1',
        productName: 'Monitor',
        productBrand: 'Acer',
        productImage: '../../../assets/monitor.webp',
        productPrice: '7999'
      },
      {
        productID: '1',
        productName: 'Monitor',
        productBrand: 'Acer',
        productImage: '../../../assets/monitor.webp',
        productPrice: '7999'
      },
      {
        productID: '1',
        productName: 'Monitor',
        productBrand: 'Acer',
        productImage: '../../../assets/monitor.webp',
        productPrice: '7999'
      },
      {
        productID: '1',
        productName: 'Monitor',
        productBrand: 'Acer',
        productImage: '../../../assets/monitor.webp',
        productPrice: '7999'
      },
      {
        productID: '1',
        productName: 'Monitor',
        productBrand: 'Acer',
        productImage: '../../../assets/monitor.webp',
        productPrice: '7999'
      }]
    }
  }

}
