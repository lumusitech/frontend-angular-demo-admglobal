import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProvidersMenuComponent } from './providers-menu.component';

describe('ProvidersMenuComponent', () => {
  let component: ProvidersMenuComponent;
  let fixture: ComponentFixture<ProvidersMenuComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProvidersMenuComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProvidersMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
