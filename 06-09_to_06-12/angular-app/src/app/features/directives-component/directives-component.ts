import { NgClass, NgStyle } from "@angular/common";
import { Component } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { HighlightDirective } from "../CustomDirectives/highlight-directive";

@Component({
	selector: "app-directives-component",
	imports: [HighlightDirective, NgClass, NgStyle, FormsModule],
	templateUrl: "./directives-component.html",
	styleUrl: "./directives-component.css",
})
export class DirectivesComponent {
	isVisible: boolean = true;
	userLevel: number = 1;
	frameworks: string[] = ["Angular", "React", "Three.js", "Vue.js"];
	favFramework: string = "";
	showList: boolean = true;

	incrementLevel(): void {
		if (this.userLevel < 4) {
			this.userLevel++;
		} else {
			this.userLevel = 1;
		}
	}
}
