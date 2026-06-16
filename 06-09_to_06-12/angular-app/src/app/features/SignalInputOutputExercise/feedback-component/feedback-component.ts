import { Component } from '@angular/core';
import { StarRatingComponent } from '../star-raiting-component/star-raiting-component';

@Component({
  selector: 'app-feedback-component',
  imports: [StarRatingComponent],
  templateUrl: './feedback-component.html',
  styleUrl: './feedback-component.css',
})
export class FeedbackComponent {
  maxRating = 5;
  selectedRating = 0;

  onRatingSelected(rating: number): void {
    this.selectedRating = rating;
  }
}
