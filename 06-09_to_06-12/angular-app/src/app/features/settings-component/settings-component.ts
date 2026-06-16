import { Component, computed, inject } from '@angular/core';
import { UserPreferencesService } from '../../core/services/user-preferences-service';
import { PreviewComponent } from '../preview-component/preview-component';

@Component({
  selector: 'app-settings-component',
  imports: [PreviewComponent],
  templateUrl: './settings-component.html',
  styleUrl: './settings-component.css',
})
export class SettingsComponent {
  private readonly userPreference: UserPreferencesService = inject(UserPreferencesService);

  protected readonly username = computed(() => this.userPreference.username());
  protected readonly isDarkTheme = computed(() => this.userPreference.darkTheme());

  protected setUsername(name: string): void {
    this.userPreference.setUsername(name);
  }

  protected toggleTheme(): void {
    this.userPreference.toggleTheme();

    if (this.isDarkTheme()) {
      document.documentElement.setAttribute('data-theme', 'dark');
    } else {
      document.documentElement.setAttribute('data-theme', 'light');
    }
  }
}
