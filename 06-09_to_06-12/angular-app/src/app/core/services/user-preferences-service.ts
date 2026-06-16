import { Service, signal } from '@angular/core';

@Service()
export class UserPreferencesService {
  readonly username = signal<string>('guest')

  readonly darkTheme = signal<boolean>(false);

  setUsername(name: string): void {
    this.username.set(name);
  }

  toggleTheme(): void {
    this.darkTheme.update(isDarkTheme => !isDarkTheme);
  }
}
