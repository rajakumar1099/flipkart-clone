import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { ProductDetails } from '../services/home.types';

@Component({
  selector: 'app-home-product-listing',
  templateUrl: './home-product-listing.component.html',
  styleUrls: ['./home-product-listing.component.scss']
})
export class HomeProductListingComponent implements OnInit {
  public productList: ProductDetails[] | undefined
  @ViewChild('productItemContainer', { read: ElementRef }) public productItemContainer: ElementRef<any> | undefined
  constructor() { }

  ngOnInit(): void {
    this.productList = [{
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

  public scrollRight(event: any): void {
    // console.log(event);
    // const productContainer: ElementRef = event?.path.find((x: any) => x?.id.includes(id));
    // console.log(productContainer.nativeElement);
    // event.scrollIntoView({behavior: 'smooth'});
    // console.log(event.nativeElement);
    // this.productItemContainer!.nativeElement.scrollRight += 20;
  }

}
