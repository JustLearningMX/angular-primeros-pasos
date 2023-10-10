import { Component } from '@angular/core';

@Component({
  selector: 'app-heroes-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent {

  heroesNames: string[] = ['Spiderman', 'Ironman', 'Hulk', 'Thor', 'Captain America'];
  heroeBorrado: string = '';

  borrarHeroe(): void {
    const heroe = this.heroesNames.pop();

    if (heroe)
      this.heroeBorrado = heroe;

  }
}
