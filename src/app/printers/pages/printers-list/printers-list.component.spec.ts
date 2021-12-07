import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PrintersListComponent } from './printers-list.component';

describe('PrintersListComponent', () => {
  let component: PrintersListComponent;
  let fixture: ComponentFixture<PrintersListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PrintersListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PrintersListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
