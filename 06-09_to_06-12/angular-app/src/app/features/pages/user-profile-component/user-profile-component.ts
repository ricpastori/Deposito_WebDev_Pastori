import { Component, computed, inject, input } from '@angular/core';
import { UserService } from '../../../core/services/user-service';

@Component({
  selector: 'app-user-profile-component',
  imports: [],
  templateUrl: './user-profile-component.html',
  styleUrl: './user-profile-component.css',
})
export class UserProfileComponent
{
  id = input.required<string>();

  private userService: UserService = inject(UserService)

  user = computed(() => this.userService.getUser(this.id()))
}
