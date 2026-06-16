import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-admin-page-component',
  imports: [RouterLink, RouterOutlet],
  templateUrl: './admin-page-component.html',
  styleUrl: './admin-page-component.css',
})
export class AdminPageComponent {}
