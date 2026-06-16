import { Component } from '@angular/core';
import { ReactiveFormsModule, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-contact-component',
  imports: [ReactiveFormsModule],
  templateUrl: './contact-component.html',
  styleUrl: './contact-component.css',
})
export class ContactComponent {
  contactForm: FormGroup = new FormGroup({
    object: new FormControl<string>('', Validators.required),
    priority: new FormControl<string>('', Validators.required),
    message: new FormControl<string>('', [Validators.required, Validators.minLength(10)]),
  });

  submitted = false;

  onContact(): void {
    if (this.contactForm.invalid) {
      return;
    }

    this.submitted = true;
    console.log(this.contactForm.getRawValue());
  }
}
