import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CashFlowOpenComponent } from './cash-flow-open.component';

describe('CashFlowOpenComponent', () => {
  let component: CashFlowOpenComponent;
  let fixture: ComponentFixture<CashFlowOpenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CashFlowOpenComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CashFlowOpenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
