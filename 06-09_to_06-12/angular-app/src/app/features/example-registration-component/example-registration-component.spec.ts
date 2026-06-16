import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExampleRegistrationComponent } from './example-registration-component';

describe('ExampleRegistrationComponent', () => {
  let component: ExampleRegistrationComponent;
  let fixture: ComponentFixture<ExampleRegistrationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ExampleRegistrationComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(ExampleRegistrationComponent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
