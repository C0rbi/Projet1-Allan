import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CompteCreation } from './compte-creation';

describe('CompteCreation', () => {
  let component: CompteCreation;
  let fixture: ComponentFixture<CompteCreation>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CompteCreation]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CompteCreation);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
