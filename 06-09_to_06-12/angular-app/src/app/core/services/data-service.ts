import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})

export class DataService {
  private items: string[] = ['mela', 'pera', 'formaggio']

  addItem(item: string): void {
    this.items.push(item)
  }

  getItems(): string[] {
    return [...this.items]
  }
}
