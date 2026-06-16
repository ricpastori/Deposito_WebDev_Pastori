import { Component } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';

@Component({
  selector: 'app-registration-component',
  imports: [FormsModule],
  templateUrl: './registration-component.html',
  styleUrl: './registration-component.css',
})
export class RegistrationComponent {
  user = {name: "", email: "", age: 0}
  submitted: boolean = false

  onSubmit(form: NgForm): void{
    if (form.invalid) {
      return
    }

    this.submitted = true
    console.log(this.user)
  }
}
