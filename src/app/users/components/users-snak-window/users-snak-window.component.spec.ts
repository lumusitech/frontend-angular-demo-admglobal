import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UsersSnakWindowComponent } from './users-snak-window.component';

describe('UsersSnakWindowComponent', () => {
  let component: UsersSnakWindowComponent;
  let fixture: ComponentFixture<UsersSnakWindowComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UsersSnakWindowComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UsersSnakWindowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
