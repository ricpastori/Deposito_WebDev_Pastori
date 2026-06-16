import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GuardLoginComponent } from './guard-login-component';

describe('GuardLoginComponent', () => {
  let component: GuardLoginComponent;
  let fixture: ComponentFixture<GuardLoginComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GuardLoginComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(GuardLoginComponent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
