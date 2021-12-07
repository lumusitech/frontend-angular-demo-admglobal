import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CashFlowCloseComponent } from './cash-flow-close.component';

describe('CashFlowCloseComponent', () => {
  let component: CashFlowCloseComponent;
  let fixture: ComponentFixture<CashFlowCloseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CashFlowCloseComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CashFlowCloseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
