import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AccountStatement2Component } from './account-statement2.component';

describe('AccountStatement2Component', () => {
  let component: AccountStatement2Component;
  let fixture: ComponentFixture<AccountStatement2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AccountStatement2Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AccountStatement2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
