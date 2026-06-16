import { Component, signal, computed } from '@angular/core';

type TrafficLightColor = 'green' | 'yellow' | 'red';

@Component({
  selector: 'app-traffic-light-component',
  imports: [],
  templateUrl: './traffic-light-component.html',
  styleUrl: './traffic-light-component.css',
})
export class TrafficLightComponent {
  color = signal<TrafficLightColor>('red')

  status = computed(() => {
    switch(this.color()) {
      case 'green':
        return 'Vai!'
      case 'yellow':
        return 'Rallenta'
      case 'red':
      default:
        return 'Fermati'
    }
  })

  changeStatus(): void {
    const colors: TrafficLightColor[] = ['green', 'yellow', 'red']
    const currentIndex = colors.indexOf(this.color())
    const nextIndex = (currentIndex + 1) % colors.length

    this.color.set(colors[nextIndex])
  }
}
