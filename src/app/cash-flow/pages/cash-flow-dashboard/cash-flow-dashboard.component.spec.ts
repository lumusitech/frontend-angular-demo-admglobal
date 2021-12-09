import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CashFlowDashboardComponent } from './cash-flow-dashboard.component';

describe('CashFlowDashboardComponent', () => {
  let component: CashFlowDashboardComponent;
  let fixture: ComponentFixture<CashFlowDashboardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CashFlowDashboardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CashFlowDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
