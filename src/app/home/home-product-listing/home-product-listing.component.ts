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
  private readonly scrollSize = 500;
  constructor() { }

  ngOnInit(): void {
  }

  public scrollRight(): void {
    var rightScroll = (this.productItemContainer!.nativeElement.scrollLeft += this.scrollSize);
    console.log(rightScroll);

    this.showRightArrow = true/* !(rightScroll <= this.scrollSize) */
    this.showLeftArrow = (this.productItemContainer!.nativeElement.scrollLeft >= 0)
    // console.log(this.productItemContainer!.nativeElement.scrollLeft);
  }

  public scrollLeft(): void {
    this.productItemContainer!.nativeElement.scrollLeft -= this.scrollSize;
    this.showRightArrow = this.productItemContainer!.nativeElement.scrollLeft > 0;
    this.showLeftArrow = this.productItemContainer!.nativeElement.scrollLeft > this.scrollSize;
  }
}
