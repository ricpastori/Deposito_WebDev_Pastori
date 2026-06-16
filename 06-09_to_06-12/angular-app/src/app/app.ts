import { Component, signal } from '@angular/core';
import { RouterModule, RouterOutlet } from '@angular/router';
import { AddTaskComponent } from './features/add-task-component/add-task-component';

/* import { BaseComponent } from "./features/base-component/base-component";
import { ImageComponent } from "./features/image-component/image-component";
import { ParagraphComponent } from "./features/paragraph-component/paragraph-component";
import { TitleComponent } from "./features/title-component/title-component";
import { BindingComponent } from "./features/binding-component/binding-component";
import { ProductCardComponent } from "./features/product-card-component/product-card-component";
import { DirectivesComponent } from "./features/directives-component/directives-component";
import { StudentListComponent } from "./features/student-list-component/student-list-component";
import { ExampleRegistrationComponent } from "./features/example-registration-component/example-registration-component";
import { LoginComponent } from "./features/login-component/login-component";
import { RegistrationComponent } from "./features/registration-component/registration-component";
import { ContactComponent } from "./features/contact-component/contact-component";
import { ParentComponent } from "./features/InputOutputSample/parent-component/parent-component";
import { SignalExampleComponent } from "./features/signal-example-component/signal-example-component"; */
/* import { TrafficLightComponent } from "./features/traffic-light-component/traffic-light-component";
import { PriceComponent } from "./features/price-component/price-component";
import { ProductListComponent } from "./features/SignalInputOutputExercise/product-list-component/product-list-component";
import { FeedbackComponent } from "./features/SignalInputOutputExercise/feedback-component/feedback-component"; */
/* import { ItemListComponent } from "./features/item-list-component/item-list-component";
import { SettingsComponent } from "./features/settings-component/settings-component";
import { ShoppingListComponent } from "./features/shopping-list-component/shopping-list-component"; */

@Component({
	selector: "app-root",
	imports: [
		/* BaseComponent,
    ParagraphComponent,
    TitleComponent,
    BindingComponent,
    ProductCardComponent,
    DirectivesComponent,
    StudentListComponent,
    ExampleRegistrationComponent,
    LoginComponent,
    RegistrationComponent,
    ContactComponent,
    ParentComponent,
    SignalExampleComponent,
    TrafficLightComponent,
    PriceComponent,
    ProductListComponent,
    FeedbackComponent, */
		/* ItemListComponent,
    SettingsComponent,
		ShoppingListComponent,
    RouterOutlet, */
    RouterModule,
    AddTaskComponent
	],
	templateUrl: "./app.html",
	styleUrl: "./app.css",
})
export class App {
	protected readonly title = signal("esempio_1");
}
