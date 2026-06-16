import { Component, inject, computed } from '@angular/core';
import { UserPreferencesService } from '../../core/services/user-preferences-service';

@Component({
  selector: 'app-preview-component',
  imports: [],
  templateUrl: './preview-component.html',
  styleUrl: './preview-component.css',
})
export class PreviewComponent {
  private userPreference: UserPreferencesService = inject(UserPreferencesService);

  protected readonly username = computed(() => this.userPreference.username());
}
