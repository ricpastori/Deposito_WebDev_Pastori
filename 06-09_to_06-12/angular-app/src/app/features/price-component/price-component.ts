import { Component, computed, effect, signal } from '@angular/core';

@Component({
  selector: 'app-price-component',
  imports: [],
  templateUrl: './price-component.html',
  styleUrl: './price-component.css',
})
export class PriceComponent {
  netPrice = signal(100)

  vatTax = signal(0.22)

  grossPrice = computed(() => this.netPrice() * (1 + this.vatTax()))

  updatePrice(event: Event): void {
    const input = event.target as HTMLInputElement
    this.netPrice.set(Number(input.value))
  }
}
