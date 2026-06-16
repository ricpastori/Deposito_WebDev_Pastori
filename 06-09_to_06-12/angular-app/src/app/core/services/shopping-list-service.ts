import { Injectable, signal } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ShoppingListService {
  readonly items = signal<string[]>([])

  addItem(name: string): void {
    this.items.update(items => [...items, name])
  }

  removeItemByIndex(index: number): void {
    this.items.update(items => items.filter((_, itemIndex) => itemIndex !== index))
  }
}
