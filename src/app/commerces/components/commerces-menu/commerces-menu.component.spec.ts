import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CommercesMenuComponent } from './commerces-menu.component';

describe('CommercesMenuComponent', () => {
  let component: CommercesMenuComponent;
  let fixture: ComponentFixture<CommercesMenuComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CommercesMenuComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CommercesMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
