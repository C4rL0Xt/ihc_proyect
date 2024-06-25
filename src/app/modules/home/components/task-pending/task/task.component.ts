import { Component } from '@angular/core';

export interface Section {
  name: string;
  updated: Date;
  description: string;
}

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrl: './task.component.css'
})
export class TaskComponent {

  folders: Section[] = [
    {
      name: 'Internet de las Cosas',
      updated: new Date('06/30/24'),
      description: 'Leer Articulo de Smart Cities',
    },
    {
      name: 'Inteligencia Artificial',
      updated: new Date('07/01/24'),
      description: 'Crear musica con IA'
    },
    {
      name: 'Inteligencia de negocios',
      updated: new Date('07/04/24'),
      description: 'Exposicion Final'
    },
  ];



  setData(): void {

  }

}
