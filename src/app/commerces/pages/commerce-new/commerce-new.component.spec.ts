import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CommerceNewComponent } from './commerce-new.component';

describe('CommerceNewComponent', () => {
  let component: CommerceNewComponent;
  let fixture: ComponentFixture<CommerceNewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CommerceNewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CommerceNewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
