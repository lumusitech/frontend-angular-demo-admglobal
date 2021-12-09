import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DiscountsDashboardComponent } from './discounts-dashboard.component';

describe('DiscountsDashboardComponent', () => {
  let component: DiscountsDashboardComponent;
  let fixture: ComponentFixture<DiscountsDashboardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DiscountsDashboardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DiscountsDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
