import { Component, signal } from "@angular/core";
import { RouterOutlet } from "@angular/router";

/* import { BaseComponent } from "./features/base-component/base-component";
import { ImageComponent } from "./features/image-component/image-component";
import { ParagraphComponent } from "./features/paragraph-component/paragraph-component";
import { TitleComponent } from "./features/title-component/title-component";
import { BindingComponent } from "./features/binding-component/binding-component";
import { ProductCardComponent } from "./features/product-card-component/product-card-component";
import { DirectivesComponent } from "./features/directives-component/directives-component"; */
import { StudentListComponent } from "./features/student-list-component/student-list-component";

@Component({
	selector: "app-root",
	imports: [
		RouterOutlet,
		/* BaseComponent,
    ParagraphComponent,
    TitleComponent,
		BindingComponent,
		ProductCardComponent,
		DirectivesComponent,*/
		StudentListComponent,
	],
	templateUrl: "./app.html",
	styleUrl: "./app.css",
})
export class App {
	protected readonly title = signal("esempio_1");
}
