import { Component, inject } from '@angular/core';
import { AuthService } from '../../../core/services/auth-service';
import { Router } from '@angular/router';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-login-page-component',
  imports: [ReactiveFormsModule],
  templateUrl: './login-page-component.html',
  styleUrl: './login-page-component.css',
})
export class LoginPageComponent
{
  private authServ: AuthService = inject(AuthService)
  private router: Router = inject(Router)

  loginForm: FormGroup = new FormGroup({
    username: new FormControl<string>('', {nonNullable: true, validators: [Validators.required]}),
    password: new FormControl<string>('', {nonNullable: true, validators: [Validators.required, Validators.minLength(6)]}),
    role: new FormControl<'admin' | 'user'>('user')
  })

  onLogin():void{
    // if(!this.loginForm.invalid) return

    const datiLogin = this.loginForm.getRawValue()
    this.authServ.login(datiLogin.role)
    console.log('login effettuato per', datiLogin.username, 'ruolo: ', datiLogin.role)
    this.router.navigateByUrl('/admin')
  }
}
