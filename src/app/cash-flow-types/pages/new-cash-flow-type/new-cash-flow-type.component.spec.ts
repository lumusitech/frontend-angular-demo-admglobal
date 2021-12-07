import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewCashFlowTypeComponent } from './new-cash-flow-type.component';

describe('NewCashFlowTypeComponent', () => {
  let component: NewCashFlowTypeComponent;
  let fixture: ComponentFixture<NewCashFlowTypeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NewCashFlowTypeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NewCashFlowTypeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
