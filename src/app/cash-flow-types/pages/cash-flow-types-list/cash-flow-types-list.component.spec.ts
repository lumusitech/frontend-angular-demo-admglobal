import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CashFlowTypesListComponent } from './cash-flow-types-list.component';

describe('CashFlowTypesListComponent', () => {
  let component: CashFlowTypesListComponent;
  let fixture: ComponentFixture<CashFlowTypesListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CashFlowTypesListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CashFlowTypesListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
