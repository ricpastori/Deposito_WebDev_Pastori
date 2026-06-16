import { Component, EventEmitter, Input, Output, input, output } from '@angular/core';

@Component({
  selector: 'app-child-component',
  imports: [],
  templateUrl: './child-component.html',
  styleUrl: './child-component.css',
})
export class ChildComponent {
  @Input() childCounter: number = 0;
  @Output() counterChange: EventEmitter<number> = new EventEmitter<number>()

  childCounterSignal = input<number>(0)
  counterChangeSignal = output<number>()

  increment(): void {
    this.counterChange.emit(this.childCounter + 1)
  }

  decrement(): void {
    this.counterChange.emit(this.childCounter - 1)
  }

  incrementSignal(): void {
    this.counterChangeSignal.emit(this.childCounterSignal() + 1)
  }

  decrementSignal(): void {
    this.counterChangeSignal.emit(this.childCounterSignal() - 1)
  }
}
