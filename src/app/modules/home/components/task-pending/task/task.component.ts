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
      name: 'Fisica',
      updated: new Date('1/1/16'),
      description: 'Leer Articulo de Estatica',
    },
    {
      name: 'Base de Datos',
      updated: new Date('1/17/16'),
      description: 'Leer Articulo de Estatica'
    },
    {
      name: 'POO',
      updated: new Date('1/28/16'),
      description: 'Leer Articulo de Estatica'
    },
  ];



  setData(): void {

  }

}
