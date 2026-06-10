import { Component } from "@angular/core";
import { FormsModule } from "@angular/forms";

@Component({
	selector: "app-product-card-component",
	imports: [FormsModule],
	templateUrl: "./product-card-component.html",
	styleUrl: "./product-card-component.css",
})
export class ProductCardComponent {
	name = "Zaino da Montagna";
	brand = "AlpinePro";
	price = 89.9;
	discount = 0.2; // 20%
	stock: number = 2;
	imageUrl: string = "https://picsum.photos/300/200";
	tags: string[] = ["outdoor", "sport", "impermeabile"];
	available: boolean = true;
	shop(): void {
		this.available = false;
		// TODO: imposta available a false
	}
	finalPrice(number: number): number {
		return number * (1 - this.discount);
	}
}
