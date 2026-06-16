import { Injectable, signal } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class AuthService
{
  private loggedIn = signal<boolean>(false)
  private role = signal<'admin' | 'user'>('user')

  login(role?: 'admin' | 'user'): void
  {
    this.loggedIn.set(true)

    if(role){
      this.role.set(role)
    }
    console.log("is logged")
  }

  loguot(): void{
    this.loggedIn.set(false)
  }

  isLoggedIn(): boolean{
    return this.loggedIn()
  }

  getRole(): 'admin' | 'user'{
    return this.role()
  }
}
