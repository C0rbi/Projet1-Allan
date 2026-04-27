import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListingProduct } from './listing-product';

describe('ListingProduct', () => {
  let component: ListingProduct;
  let fixture: ComponentFixture<ListingProduct>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ListingProduct]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListingProduct);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
