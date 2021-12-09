import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PrintersMenuComponent } from './printers-menu.component';

describe('PrintersMenuComponent', () => {
  let component: PrintersMenuComponent;
  let fixture: ComponentFixture<PrintersMenuComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PrintersMenuComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PrintersMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
