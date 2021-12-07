import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CashFlowTypeComponent } from './cash-flow-type.component';

describe('CashFlowTypeComponent', () => {
  let component: CashFlowTypeComponent;
  let fixture: ComponentFixture<CashFlowTypeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CashFlowTypeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CashFlowTypeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
