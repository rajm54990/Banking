import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AboutbankComponent } from './aboutbank.component';

describe('AboutbankComponent', () => {
  let component: AboutbankComponent;
  let fixture: ComponentFixture<AboutbankComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AboutbankComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AboutbankComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
