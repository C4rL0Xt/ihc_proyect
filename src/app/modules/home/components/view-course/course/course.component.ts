import { Component, OnInit } from '@angular/core';

interface Course {
  courseName: string;
  teacherName: string;
  teacherPhoto: string;
  credits: number;
  horario: string;
  cycle: string;
}

@Component({
  selector: 'app-course',
  templateUrl: './course.component.html',
  styleUrl: './course.component.css'
})
export class CourseComponent implements OnInit {
  searchQuery: string = '';
  selectedCycle: string = '';

  courses: Course[] = [
    {
      courseName: 'Interaccion Hombre Computador',
      teacherName: 'Pablo Edwin Lopez Villanueva',
      teacherPhoto: 'assets/images/foto.png',
      credits: 3,
      horario: 'Lunes: de 2:00 pm a 6:00 pm',
      cycle: 'ciclo1'
    },
    {
      courseName: 'Interaccion Hombre Computador',
      teacherName: 'Pablo Edwin Lopez Villanueva',
      teacherPhoto: 'assets/images/foto.png',
      credits: 3,
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
    }
  ];


  randomColors: string[] = [];

  constructor() { }

  ngOnInit(): void {
    this.generateRandomColors();
  }

  generateRandomColors() {
    for (let i = 0; i < this.courses.length; i++) {
      this.randomColors.push(this.getRandomColor());
    }
  }

  getRandomColor(): string {
    const hue = Math.floor(Math.random() * 360); // Rango de 0 a 360 grados para el tono
    const saturation = Math.floor(Math.random() * 31) + 60; // Saturación en el rango de 60% a 90%
    const lightness = Math.floor(Math.random() * 21) + 70; // Luminosidad en el rango de 60% a 80%
    return `hsl(${hue}, ${saturation}%, ${lightness}%)`;
  }

  filteredCourses(): Course[] {
    return this.courses.filter(course =>
      (course.cycle === this.selectedCycle || this.selectedCycle === '') && // Filtrar por ciclo seleccionado
      course.courseName.toLowerCase().includes(this.searchQuery.toLowerCase())
    );
  }
}
