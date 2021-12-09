import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CashFlowMenuComponent } from './cash-flow-menu.component';

describe('CashFlowMenuComponent', () => {
  let component: CashFlowMenuComponent;
  let fixture: ComponentFixture<CashFlowMenuComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CashFlowMenuComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CashFlowMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
