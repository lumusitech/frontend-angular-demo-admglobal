import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewEmailAuthorizationComponent } from './new-email-authorization.component';

describe('NewEmailAuthorizationComponent', () => {
  let component: NewEmailAuthorizationComponent;
  let fixture: ComponentFixture<NewEmailAuthorizationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NewEmailAuthorizationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NewEmailAuthorizationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
