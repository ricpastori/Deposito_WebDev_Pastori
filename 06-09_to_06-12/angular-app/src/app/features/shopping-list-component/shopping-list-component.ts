import { Component, computed, inject } from '@angular/core';
import { ShoppingListService } from '../../core/services/shopping-list-service';
import { AdditemComponent } from "../additem-component/additem-component";

@Component({
  selector: 'app-shopping-list-component',
  imports: [AdditemComponent],
  templateUrl: './shopping-list-component.html',
  styleUrl: './shopping-list-component.css',
})
export class ShoppingListComponent {
  private shoppingList: ShoppingListService = inject(ShoppingListService);

  protected readonly itemsList = computed(() => this.shoppingList.items())

  protected removeItem(item: string): void {
    const index: number = this.itemsList().indexOf(item)

    this.shoppingList.removeItemByIndex(index);
  }
}
