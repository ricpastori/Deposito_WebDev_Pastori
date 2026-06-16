import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-edit-page-component',
  imports: [],
  templateUrl: './edit-page-component.html',
  styleUrl: './edit-page-component.css',
})
export class EditPageComponent
{
  savedValue = signal<string>('')
  currentValue = signal<string>('')

  onInput(event: Event): void{
    const target = event.target as HTMLInputElement
    this.currentValue.set(target?.value ?? '')
  }

  save(): void{
    this.savedValue.set(this.currentValue())
  }

  hasUnsavedChanges(): boolean
  {
    return this.savedValue() !== this.currentValue()
  }
}
