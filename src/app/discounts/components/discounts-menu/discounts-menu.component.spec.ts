import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DiscountsMenuComponent } from './discounts-menu.component';

describe('DiscountsMenuComponent', () => {
  let component: DiscountsMenuComponent;
  let fixture: ComponentFixture<DiscountsMenuComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DiscountsMenuComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DiscountsMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
