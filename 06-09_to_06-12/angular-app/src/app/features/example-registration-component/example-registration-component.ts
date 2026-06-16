import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-example-registration-component',
  imports: [FormsModule],
  templateUrl: './example-registration-component.html',
  styleUrl: './example-registration-component.css',
})
export class ExampleRegistrationComponent {
  user = {name: "", email: ""}
  submitted: boolean = false

  onSubmit(): void{
    this.submitted = true
  }
}
