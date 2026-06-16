import { Component, signal } from '@angular/core';
import { ChildComponent } from '../child-component/child-component';

@Component({
  selector: 'app-parent-component',
  imports: [ChildComponent],
  templateUrl: './parent-component.html',
  styleUrl: './parent-component.css',
})
export class ParentComponent {
  counter:number = 0;

  counterSignal = signal<number>(0)

  onCounterChanged(newValue: number): void {
    this.counter = newValue
  }

  onCounterChangedSignal(newValue: number): void{
    this.counterSignal.set(newValue)
  }
}
