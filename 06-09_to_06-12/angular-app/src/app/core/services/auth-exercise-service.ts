import { Injectable, signal } from '@angular/core';

export interface BrowserLoginData{
  username: string,
  language: string,
  platform: string,
  userAgent: string
}

@Injectable({
  providedIn: 'root',
})
export class AuthExerciseService
{
  private loggedIn = signal<boolean>(false)
  private user = signal<BrowserLoginData | null>(null)

  login(username: string): void
  {
    this.loggedIn.set(true)
    this.user.set({
      username,
      language: navigator.language,
      platform: navigator.platform,
      userAgent: navigator.userAgent
    })
  }

  logout(): void{
    this.loggedIn.set(false)
    this.user.set(null)
  }

  isLoggedIn(): boolean{
    return this.loggedIn()
  }

  getUser(): BrowserLoginData | null{
    return this.user()
  }
}
