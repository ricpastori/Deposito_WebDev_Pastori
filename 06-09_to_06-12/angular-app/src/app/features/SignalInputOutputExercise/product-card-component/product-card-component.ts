import { Component, input, output } from '@angular/core';

@Component({
  selector: 'app-product-card-component',
  imports: [],
  templateUrl: './product-card-component.html',
  styleUrl: './product-card-component.css',
})
export class ProductCardComponent {
  name = input<string>("")
  description = input<string>("")
  price = input<number>(0)
  available = input<boolean>(false)
}
