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
    { date: '2023-12-01', title: 'Examen Final de Matemáticas', description: 'Examen final del curso de Matemáticas.' },
    { date: '2023-12-05', title: 'Presentación de Proyecto', description: 'Presentación del proyecto de fin de curso.' },
    { date: '2023-12-10', title: 'Verbena Navideña', description: 'Evento festivo de Navidad en la facultad.' },
    { date: '2023-12-15', title: 'Entrega de Prácticas', description: 'Fecha límite para la entrega de prácticas.' },
  ];

  constructor() { }

  ngOnInit(): void { }
}
