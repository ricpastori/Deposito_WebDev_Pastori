import { Component, input, output } from '@angular/core';

@Component({
  selector: 'app-star-rating-component',
  imports: [],
  templateUrl: './star-raiting-component.html',
  styleUrl: './star-raiting-component.css',
})
export class StarRatingComponent {
  max = input(5);
  selectedRating = output<number>();
  currentRating = 0;

  getStars(): number[] {
    const stars: number[] = [];

    for (let i = 1; i <= this.max(); i++) {
      stars.push(i);
    }

    return stars;
  }

  selectRating(rating: number): void {
    this.currentRating = rating;
    this.selectedRating.emit(rating);
  }
}
