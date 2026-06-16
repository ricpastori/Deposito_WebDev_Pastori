import { Component, inject } from '@angular/core';
import { Router } from '@angular/router';
import { AuthExerciseService } from '../../core/services/auth-exercise-service';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-guard-login-component',
  imports: [ReactiveFormsModule],
  templateUrl: './guard-login-component.html',
  styleUrl: './guard-login-component.css',
})
export class GuardLoginComponent
{
  private auth = inject(AuthExerciseService)
  private router = inject(Router)

  loginForm: FormGroup = new FormGroup({
    username: new FormControl<string>('', {nonNullable: true, validators: [Validators.required]}),
    password: new FormControl<string>('', {nonNullable: true, validators: [Validators.required, Validators.minLength(6)]})
  })

  onLogin(): void{
    const loginData = this.loginForm.getRawValue()

    this.auth.login(loginData.username)
    this.router.navigateByUrl('/dashboard')
  }
}
