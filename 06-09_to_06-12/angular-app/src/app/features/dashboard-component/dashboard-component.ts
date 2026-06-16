import { Component, inject } from '@angular/core';
import { Router } from '@angular/router';
import { AuthExerciseService, BrowserLoginData } from '../../core/services/auth-exercise-service';

@Component({
  selector: 'app-dashboard-component',
  imports: [],
  templateUrl: './dashboard-component.html',
  styleUrl: './dashboard-component.css',
})
export class DashboardComponent
{
  private auth = inject(AuthExerciseService)
  private router = inject(Router)

  user: BrowserLoginData | null = this.auth.getUser()

  logout(): void{
    this.auth.logout()
    this.router.navigateByUrl('/login2')
  }
}
