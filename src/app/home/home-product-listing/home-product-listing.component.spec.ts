import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeProductListingComponent } from './home-product-listing.component';

describe('HomeProductListingComponent', () => {
  let component: HomeProductListingComponent;
  let fixture: ComponentFixture<HomeProductListingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HomeProductListingComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HomeProductListingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
