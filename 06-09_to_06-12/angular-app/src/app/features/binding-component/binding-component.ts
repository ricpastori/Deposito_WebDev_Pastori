import { Component } from "@angular/core";
import { FormsModule } from "@angular/forms";

@Component({
	selector: "app-binding-component",
	imports: [FormsModule],
	templateUrl: "./binding-component.html",
	styleUrl: "./binding-component.css",
})
export class BindingComponent {
	// Interpolation binding
	username: string = "";
	num: number = 10;

	// Image property binding
	imgUrl: string =
		"https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=900&q=80";
	imgWidth: number = 200;

	// Event binding
	currentMsg: string = "Buongiorno";
	message: string[] = [
		"Buongiorno",
		"Buon pomeriggio",
		"Buonasera",
		"Buonanotte",
	];
	index: number = 0;

	saluta(): void {
		this.index++;
		if (this.index >= this.message.length) this.index = 0;

		this.currentMsg = this.message[this.index];
	}

	resetUsername(): void {
		this.username = "";
	}
}
