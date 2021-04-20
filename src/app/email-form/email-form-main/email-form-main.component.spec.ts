import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmailFormMainComponent } from './email-form-main.component';

describe('EmailFormMainComponent', () => {
  let component: EmailFormMainComponent;
  let fixture: ComponentFixture<EmailFormMainComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EmailFormMainComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EmailFormMainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
