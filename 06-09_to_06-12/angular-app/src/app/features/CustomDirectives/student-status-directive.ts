import { Directive, ElementRef, Input } from '@angular/core';

@Directive({
	selector: '[appStudentStatusDirective]',
})
export class StudentStatusDirective {
	constructor(private el: ElementRef) {
		this.el.nativeElement.style.padding = '4px 8px';
	}

	// @Input permette di passare un valore dal template alla directive.
	// set esegue questo codice ogni volta che Angular assegna quel valore.
	@Input() set appStudentStatusDirective(student: {
		grade: number;
		present: boolean;
	}) {
		if (!student.present) {
			this.el.nativeElement.style.textDecoration = 'line-through';
		}

		if (student.grade >= 9) {
			this.el.nativeElement.style.backgroundColor = '#d7f5dd';
			this.el.nativeElement.style.color = '#1f6b32';
		} else if (student.grade >= 6) {
			this.el.nativeElement.style.backgroundColor = '#fff1c9';
			this.el.nativeElement.style.color = '#7a5a00';
		} else {
			this.el.nativeElement.style.backgroundColor = '#ffd6d6';
			this.el.nativeElement.style.color = '#8a1c1c';
		}
	}
}
