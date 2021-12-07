import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CashFlowHistoryComponent } from './cash-flow-history.component';

describe('CashFlowListComponent', () => {
  let component: CashFlowHistoryComponent;
  let fixture: ComponentFixture<CashFlowHistoryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CashFlowHistoryComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CashFlowHistoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
