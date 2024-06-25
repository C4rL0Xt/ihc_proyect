import { Component } from '@angular/core';
import { CalendarEvent, CalendarView } from 'angular-calendar';
import { startOfDay, endOfDay, subDays, addDays, endOfMonth, isSameDay, isSameMonth, addHours } from 'date-fns';


interface Event {
  date: string;
  title: string;
  description: string;
}

@Component({
  selector: 'app-events',
  templateUrl: './events.component.html',
  styleUrl: './events.component.css'
})
export class EventsComponent {
  events: Event[] = [
    { date: '2024-06-25', title: 'Exposicion IHC', description: 'Prototipo de proyecto' },
    { date: '2024-06-26', title: 'Copa America', description: 'Peru vs Canada' },
    { date: '2024-06-26', title: 'Laboratorio DSW', description: 'Presentacion del laboratorio Angular' },
    { date: '2024-06-27', title: 'Entrega de Prácticas IO', description: 'Practica Calificada 2' },
  ];

  constructor() { }

  ngOnInit(): void { }
}
