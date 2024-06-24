import { Injectable } from '@angular/core';

export interface Course {
  courseName: string;
  teacherName: string;
  teacherPhoto: string;
  credits: number;
  horario: string;
  cycle: string;
  color: string;
}

@Injectable({
  providedIn: 'root'
})
export class CoursesServiceService {
  
  randomColors: string[] = [];
  private courses: Course[] = [
    {
      courseName: 'Interaccion Hombre Computador',
      teacherName: 'Melani Laveriano Porroa',
      teacherPhoto: 'assets/images/foto.png',
      credits: 30,
      horario: 'Lunes: de 2:00 pm a 6:00 pm',
      cycle: 'ciclo1',
      color: ''
    },
    {
      courseName: 'Desarrollo de Sistemas Web',
      teacherName: 'Melani Laveriano Porroa',
      teacherPhoto: 'assets/images/foto.png',
      credits: 3,
      horario: 'Lunes: de 2:00 pm a 6:00 pm',
      cycle: 'ciclo1',
      color: ''
    },
    {
      courseName: 'Base de datos',
      teacherName: 'Espinoza Robles Armando',
      teacherPhoto: 'assets/images/foto.png',
      credits: 4,
      horario: 'Lunes: de 2:00 pm a 6:00 pm',
      cycle: 'ciclo1',
      color: ''
    },
    {
      courseName: 'Curso de ciclo 1',
      teacherName: 'Espinoza Robles Armando',
      teacherPhoto: 'assets/images/foto.png',
      credits: 4,
      horario: 'Lunes: de 2:00 pm a 6:00 pm',
      cycle: 'ciclo1',
      color: ''
    },
    {
      courseName: 'Curso de ciclo 2',
      teacherName: 'Espinoza Robles Armando',
      teacherPhoto: 'assets/images/foto.png',
      credits: 4,
      horario: 'Lunes: de 2:00 pm a 6:00 pm',
      cycle: 'ciclo2',
      color: ''
    },
    {
      courseName: 'Curso de ciclo 2',
      teacherName: 'Espinoza Robles Armando',
      teacherPhoto: 'assets/images/foto.png',
      credits: 4,
      horario: 'Lunes: de 2:00 pm a 6:00 pm',
      cycle: 'ciclo2',
      color: ''
    },
    {
      courseName: 'Curso de ciclo 2',
      teacherName: 'Espinoza Robles Armando',
      teacherPhoto: 'assets/images/foto.png',
      credits: 4,
      horario: 'Lunes: de 2:00 pm a 6:00 pm',
      cycle: 'ciclo2',
      color: ''
    },
    {
      courseName: 'Curso de ciclo 2',
      teacherName: 'Espinoza Robles Armando',
      teacherPhoto: 'assets/images/foto.png',
      credits: 4,
      horario: 'Lunes: de 2:00 pm a 6:00 pm',
      cycle: 'ciclo2',
      color: ''
    },
    {
      courseName: 'Curso de ciclo 2',
      teacherName: 'Espinoza Robles Armando',
      teacherPhoto: 'assets/images/foto.png',
      credits: 4,
      horario: 'Lunes: de 2:00 pm a 6:00 pm',
      cycle: 'ciclo2',
      color: ''
    },
    {
      courseName: 'Curso de ciclo 2',
      teacherName: 'Espinoza Robles Armando',
      teacherPhoto: 'assets/images/foto.png',
      credits: 4,
      horario: 'Lunes: de 2:00 pm a 6:00 pm',
      cycle: 'ciclo2',
      color: ''
    },
    {
      courseName: 'Curso de ciclo 2',
      teacherName: 'Espinoza Robles Armando',
      teacherPhoto: 'assets/images/foto.png',
      credits: 4,
      horario: 'Lunes: de 2:00 pm a 6:00 pm',
      cycle: 'ciclo2',
      color: ''
    },
    {
      courseName: 'Curso de ciclo 2',
      teacherName: 'Espinoza Robles Armando',
      teacherPhoto: 'assets/images/foto.png',
      credits: 4,
      horario: 'Lunes: de 2:00 pm a 6:00 pm',
      cycle: 'ciclo2',
      color: ''
    },
    {
      courseName: 'Curso de ciclo 2',
      teacherName: 'Espinoza Robles Armando',
      teacherPhoto: 'assets/images/foto.png',
      credits: 4,
      horario: 'Lunes: de 2:00 pm a 6:00 pm',
      cycle: 'ciclo2',
      color: ''
    },
    {
      courseName: 'Curso de ciclo 2',
      teacherName: 'Espinoza Robles Armando',
      teacherPhoto: 'assets/images/foto.png',
      credits: 4,
      horario: 'Lunes: de 2:00 pm a 6:00 pm',
      cycle: 'ciclo2',
      color: ''
    },
    {
      courseName: 'Curso de ciclo 2',
      teacherName: 'Espinoza Robles Armando',
      teacherPhoto: 'assets/images/foto.png',
      credits: 4,
      horario: 'Lunes: de 2:00 pm a 6:00 pm',
      cycle: 'ciclo2',
      color: ''
    },
    {
      courseName: 'Curso de ciclo 2',
      teacherName: 'Espinoza Robles Armando',
      teacherPhoto: 'assets/images/foto.png',
      credits: 4,
      horario: 'Lunes: de 2:00 pm a 6:00 pm',
      cycle: 'ciclo2',
      color: ''
    },
    {
      courseName: 'Curso de ciclo 2',
      teacherName: 'Espinoza Robles Armando',
      teacherPhoto: 'assets/images/foto.png',
      credits: 4,
      horario: 'Lunes: de 2:00 pm a 6:00 pm',
      cycle: 'ciclo2',
      color: ''
    },
    {
      courseName: 'Curso de ciclo 2',
      teacherName: 'Espinoza Robles Armando',
      teacherPhoto: 'assets/images/foto.png',
      credits: 4,
      horario: 'Lunes: de 2:00 pm a 6:00 pm',
      cycle: 'ciclo2',
      color: ''
    },
    {
      courseName: 'Curso de ciclo 2',
      teacherName: 'Espinoza Robles Armando',
      teacherPhoto: 'assets/images/foto.png',
      credits: 4,
      horario: 'Lunes: de 2:00 pm a 6:00 pm',
      cycle: 'ciclo2',
      color: ''
    }
  ];

  constructor() { 
    this.assignRandomColors();
  }

  randomColor(): string {
    const hue = Math.floor(Math.random() * 360); // Tonos de 0 a 360 grados
    const saturation = Math.floor(Math.random() * 50) + 50; // Saturación entre 50% y 100%
    const lightness = Math.floor(Math.random() * 20) + 60; // Luminosidad entre 50% y 70%
    return `hsl(${hue}, ${saturation}%, ${lightness}%)`;
  }

  assignRandomColors(): void {
    this.courses.forEach(course => {
      const color = this.randomColor();
      course.color = color; 
      this.randomColors.push(color);
    });
  }

  getCourses(): Course[] {
    return this.courses;
  }

  getColorAleatorio(): string[]{
    return this.randomColors;
  }
  
  
}
