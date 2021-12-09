import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PrintersDashboardComponent } from './printers-dashboard.component';

describe('PrintersDashboardComponent', () => {
  let component: PrintersDashboardComponent;
  let fixture: ComponentFixture<PrintersDashboardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PrintersDashboardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PrintersDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
