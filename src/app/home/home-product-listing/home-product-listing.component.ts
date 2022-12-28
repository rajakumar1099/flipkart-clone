import { Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';
import { ProductDetails } from '../services/home.types';

@Component({
  selector: 'app-home-product-listing',
  templateUrl: './home-product-listing.component.html',
  styleUrls: ['./home-product-listing.component.scss']
})
export class HomeProductListingComponent implements OnInit {
  @Input() public productList: ProductDetails | undefined
  @ViewChild('productItemContainer') public productItemContainer: ElementRef<any> | undefined;
  public showRightArrow: boolean = true;
  public showLeftArrow: boolean = false;
  private readonly scrollSize = 300;
  constructor() { }

  ngOnInit(): void {
  }

  public scrollRight(): void {
    this.productItemContainer!.nativeElement.scrollLeft += this.scrollSize;
    this.showRightArrow = this.productItemContainer!.nativeElement.scrollLeft <= 0 + this.scrollSize ? true : false;
    this.showLeftArrow = this.productItemContainer!.nativeElement.scrollLeft >= 0 ? true : false;
  }

  public scrollLeft(): void {
    this.productItemContainer!.nativeElement.scrollLeft -= this.scrollSize;
    this.showRightArrow = this.productItemContainer!.nativeElement.scrollLeft > 0 ? true : false;
    this.showLeftArrow = this.productItemContainer!.nativeElement.scrollLeft > this.scrollSize ? true : false;
  }
}
