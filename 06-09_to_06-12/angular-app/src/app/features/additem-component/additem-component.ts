import { Component, inject } from '@angular/core';
import { FormsModule } from "@angular/forms";
import { ShoppingListService } from '../../core/services/shopping-list-service';

@Component({
  selector: 'app-additem-component',
  imports: [FormsModule],
  templateUrl: './additem-component.html',
  styleUrl: './additem-component.css',
})
export class AdditemComponent {
  private shoppingList: ShoppingListService = inject(ShoppingListService);

	protected itemToAdd = "";

	protected addItem(): void {
		const item = this.itemToAdd.trim();

		if (!item) {
			return;
		}

		this.shoppingList.addItem(item);
		this.itemToAdd = "";
	}
}
