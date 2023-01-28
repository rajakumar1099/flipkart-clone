import { Component, OnInit } from '@angular/core';
import { ProductDetails } from './services/home.types';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  public electronicsProductList: ProductDetails | undefined;
  public beautyProductList: ProductDetails | undefined;
  constructor() {}

  ngOnInit(): void {
    this.electronicsProductList = {
      productTitle: 'Best of Electronics',
      products: [
        {
          productID: '1',
          productName: 'Printers',
          productBrand: 'HP',
          productImage: '../../../assets/printers.webp',
          productPrice: '3999',
        },
        {
          productID: '2',
          productName: 'Top Mirrorless Cameras',
          productBrand: 'Canon, Sony & more',
          productImage: '../../../assets/dslr_camera.webp',
          productPrice: '7999',
        },
        {
          productID: '3',
          productName: 'Best of Hair Dryers',
          productBrand: 'Philips, Nova & more',
          productImage: '../../../assets/hair_dryer.webp',
          productPrice: '399',
        },
        {
          productID: '4',
          productName: 'Monitor',
          productBrand: 'Dell',
          productImage: '../../../assets/monitor.webp',
          productPrice: '7999',
        },
        {
          productID: '5',
          productName: 'Projectors',
          productBrand: 'Zebronics',
          productImage: '../../../assets/projector.webp',
          productPrice: '7999',
        },
        {
          productID: '6',
          productName: 'Asus Monitor',
          productBrand: 'Top rated',
          productImage: '../../../assets/asus_monitor.webp',
          productPrice: '14999',
        },
        {
          productID: '4',
          productName: 'Monitor',
          productBrand: 'Dell',
          productImage: '../../../assets/monitor.webp',
          productPrice: '7999',
        },
        {
          productID: '5',
          productName: 'Projectors',
          productBrand: 'Zebronics',
          productImage: '../../../assets/projector.webp',
          productPrice: '7999',
        },
        {
          productID: '6',
          productName: 'Asus Monitor',
          productBrand: 'Top rated',
          productImage: '../../../assets/asus_monitor.webp',
          productPrice: '14999',
        },
        {
          productID: '4',
          productName: 'Monitor',
          productBrand: 'Dell',
          productImage: '../../../assets/monitor.webp',
          productPrice: '7999',
        },
        {
          productID: '5',
          productName: 'Projectors',
          productBrand: 'Zebronics',
          productImage: '../../../assets/projector.webp',
          productPrice: '7999',
        },
      ],
    };
    this.beautyProductList = {
      productTitle: 'Beauty, Food, Toys and more',
      products: [
        {
          productID: '1',
          productName: 'Yoga Mat',
          productBrand: 'HP',
          productImage: '../../../assets/yoga_mat.webp',
          productPrice: '3999',
        },
        {
          productID: '2',
          productName: 'Tyres',
          productBrand: 'Apollo, Bridgestone, Ceat & more',
          productImage: '../../../assets/tyres.webp',
          productPrice: '7999',
        },
        {
          productID: '3',
          productName: 'Premium non geared cycles',
          productBrand: 'Nivia, Cosco & more',
          productImage: '../../../assets/cycle.webp',
          productPrice: 'Up to 40% Off',
        },
        {
          productID: '4',
          productName: 'Coffee powder',
          productBrand: 'Upto 80% Off',
          productImage: '../../../assets/coffee.webp',
          productPrice: 'Nescafe, Continental & More',
        },
        {
          productID: '5',
          productName: 'Premium Footballs',
          productBrand: 'Nivia, Cosco & more',
          productImage: '../../../assets/football.webp',
          productPrice: 'Up to 60% Off',
        },
        {
          productID: '6',
          productName: 'Remote Control Toys',
          productBrand: 'Buy Now!',
          productImage: '../../../assets/remote_car.webp',
          productPrice: 'Up to 80% Off',
        },
      ],
    };
  }
}
