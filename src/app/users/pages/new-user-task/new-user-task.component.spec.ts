import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewUserTaskComponent } from './new-user-task.component';

describe('NewUserTaskComponent', () => {
  let component: NewUserTaskComponent;
  let fixture: ComponentFixture<NewUserTaskComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NewUserTaskComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NewUserTaskComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
