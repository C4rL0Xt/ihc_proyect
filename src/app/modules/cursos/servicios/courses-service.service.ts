import { Injectable } from '@angular/core';

export interface Course {
  courseName: string;
  teacherName: string;
  teacherPhoto: string;
  credits: number;
  horario: string;
  cycle: string;
}

@Injectable({
  providedIn: 'root'
})
export class CoursesServiceService {
  private courses: Course[] = [
    {
      courseName: 'Interaccion Hombre Bebita',
      teacherName: 'Melani Laveriano Porroa',
      teacherPhoto: 'assets/images/foto.png',
      credits: 30,
      horario: 'Lunes: de 2:00 pm a 6:00 pm',
      cycle: 'ciclo1'
    },
    {
      courseName: 'Metodologia de la Bebitez I',
      teacherName: 'Melani Laveriano Porroa',
      teacherPhoto: 'assets/images/foto.png',
      credits: 3,
      horario: 'Lunes: de 2:00 pm a 6:00 pm',
      cycle: 'ciclo1'
    },
    {
      courseName: 'Programacion para bebes',
      teacherName: 'Espinoza Robles Armando',
      teacherPhoto: 'assets/images/foto.png',
      credits: 4,
      horario: 'Lunes: de 2:00 pm a 6:00 pm',
      cycle: 'ciclo1'
    },
    {
      courseName: 'Curso de ciclo 1',
      teacherName: 'Espinoza Robles Armando',
      teacherPhoto: 'assets/images/foto.png',
      credits: 4,
      horario: 'Lunes: de 2:00 pm a 6:00 pm',
      cycle: 'ciclo1'
    },
    {
      courseName: 'Curso de ciclo 2',
      teacherName: 'Espinoza Robles Armando',
      teacherPhoto: 'assets/images/foto.png',
      credits: 4,
      horario: 'Lunes: de 2:00 pm a 6:00 pm',
      cycle: 'ciclo2'
    },
    {
      courseName: 'Curso de ciclo 2',
      teacherName: 'Espinoza Robles Armando',
      teacherPhoto: 'assets/images/foto.png',
      credits: 4,
      horario: 'Lunes: de 2:00 pm a 6:00 pm',
      cycle: 'ciclo2'
    },
    {
      courseName: 'Curso de ciclo 2',
      teacherName: 'Espinoza Robles Armando',
      teacherPhoto: 'assets/images/foto.png',
      credits: 4,
      horario: 'Lunes: de 2:00 pm a 6:00 pm',
      cycle: 'ciclo2'
    },
    {
      courseName: 'Curso de ciclo 2',
      teacherName: 'Espinoza Robles Armando',
      teacherPhoto: 'assets/images/foto.png',
      credits: 4,
      horario: 'Lunes: de 2:00 pm a 6:00 pm',
      cycle: 'ciclo2'
    },
    {
      courseName: 'Curso de ciclo 2',
      teacherName: 'Espinoza Robles Armando',
      teacherPhoto: 'assets/images/foto.png',
      credits: 4,
      horario: 'Lunes: de 2:00 pm a 6:00 pm',
      cycle: 'ciclo2'
    }
  ];

  constructor() { }

  getCourses(): Course[] {
    return this.courses;
  }
}
