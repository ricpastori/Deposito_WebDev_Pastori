import { Component, inject } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { DataService } from "../../core/services/data-service";

@Component({
	selector: "app-item-list-component",
	imports: [FormsModule],
	templateUrl: "./item-list-component.html",
	styleUrl: "./item-list-component.css",
})
export class ItemListComponent {
	private dataService: DataService = inject(DataService);

	items: string[] = this.dataService.getItems();
	itemToAdd = "";

	addItem(): void {
		const item = this.itemToAdd.trim();

		if (!item) {
			return;
		}

		this.dataService.addItem(item);
		this.items = this.dataService.getItems();
		this.itemToAdd = "";
	}
}
