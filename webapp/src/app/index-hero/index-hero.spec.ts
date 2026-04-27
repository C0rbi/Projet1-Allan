import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IndexHero } from './index-hero';

describe('IndexHero', () => {
  let component: IndexHero;
  let fixture: ComponentFixture<IndexHero>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [IndexHero]
    })
    .compileComponents();

    fixture = TestBed.createComponent(IndexHero);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
