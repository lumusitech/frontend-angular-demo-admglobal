import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CashFlowHistoryItemComponent } from './cash-flow-history-item.component';

describe('CashFlowHistoryItemComponent', () => {
  let component: CashFlowHistoryItemComponent;
  let fixture: ComponentFixture<CashFlowHistoryItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CashFlowHistoryItemComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CashFlowHistoryItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
