import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReversePhraseComponent } from './reverse-phrase.component';

describe('ReversePhraseComponent', () => {
  let component: ReversePhraseComponent;
  let fixture: ComponentFixture<ReversePhraseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReversePhraseComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ReversePhraseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
