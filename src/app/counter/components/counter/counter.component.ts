import {Component} from "@angular/core";

@Component({
    selector: 'app-counter',
    template: `
      <h2> Counter: {{ counter }}</h2>

      <button (click)="increaseBy()">+1</button>
      <button (click)="resetCounter()">Reset</button>
      <button (click)="decreaseBy()">-1</button>
    `,
})
export class CounterComponent {
  public counter: number = 10;

  increaseBy(): void {
    this.counter++;
  }

  decreaseBy(): void {
    if (this.counter > 0)
      this.counter--;
  }

  resetCounter() {
    this.counter = 10;
  }
}
