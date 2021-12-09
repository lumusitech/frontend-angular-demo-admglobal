import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CommercesDashboardComponent } from './commerces-dashboard.component';

describe('CommercesDashboardComponent', () => {
  let component: CommercesDashboardComponent;
  let fixture: ComponentFixture<CommercesDashboardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CommercesDashboardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CommercesDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
