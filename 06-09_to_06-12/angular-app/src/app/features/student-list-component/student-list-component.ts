import { Component } from '@angular/core';
import { StudentStatusDirective } from '../CustomDirectives/student-status-directive';

@Component({
	selector: 'app-student-list-component',
	imports: [StudentStatusDirective],
	templateUrl: './student-list-component.html',
	styleUrl: './student-list-component.css',
})
export class StudentListComponent {
	students = [
		{ name: 'Giulia', grade: 8, present: false },
		{ name: 'Marco', grade: 5, present: true },
		{ name: 'Sofia', grade: 10, present: true },
		{ name: 'Luca', grade: 6, present: true },
		{ name: 'Anna', grade: 4, present: false },
	];

	getCategory(grade: number) {
		switch (true) {
			case grade >= 9:
				return 'Ottimo';
			case grade >= 7 && grade < 9:
				return 'Buono';
			case grade >= 6 && grade < 7:
				return 'Sufficiente';
			default:
				return 'Insufficiente';
		}
	}
}
