import { Injectable } from '@angular/core';

export interface Task {
  title: string;
  description: string;
  dueDate: string;
}

export interface Material {
  title: string;
  description: string;
  url: string;
}

export interface Week {
  weekNumber: number;
  weekTema: string;
  tasks: Task[];
  materials: Material[];
}

export interface Alumn {
  nombreAlumno: string;
  correo: string;
}

export interface Libro {
  nombreLibro: string;
  ruta: string;
}

export interface Articulo {
  nombreArticulo: string;
  ruta: string;
}


export interface Course {
  courseName: string;
  seccion: string;
  teacherPhoto: string;
  credits: number;
  horario: string;
  cycle: string;
  color: string;
  weeks: Week[]; // Nueva propiedad para las semanas
  alumnos: Alumn[];
  rutaSilabo: string;
  rutasLibros: Libro[];
  rutasArticulos: Articulo[];
}

@Injectable({
  providedIn: 'root'
})
export class ServicioProfesorService {

  randomColors: string[] = [];
  private courses: Course[] = [
    {
      courseName: 'Interaccion Hombre Computador',
      seccion: 'Melani Laveriano Porroa',
      teacherPhoto: 'assets/images/foto.png',
      credits: 30,
      horario: 'Lunes: de 2:00 pm a 6:00 pm',
      cycle: 'ciclo1',
      color: '',
      weeks: [
        {
          weekNumber: 1,
          weekTema: 'Tema de la semana',
          tasks: [
            { title: 'Task 1', description: 'Description 1', dueDate: '2024-07-01' },
            { title: 'Task 2', description: 'Description 2', dueDate: '2024-07-02' }
          ],
          materials: [
            { title: 'Material 1', description: 'Description 1', url: 'http://example.com' },
            { title: 'Material 2', description: 'Description 2', url: 'http://example.com' }
          ]
        }, {
          weekNumber: 2,
          weekTema: 'Tema de la semana',
          tasks: [
            { title: 'Task 1', description: 'Description 1', dueDate: '2024-07-01' },
            { title: 'Task 2', description: 'Description 2', dueDate: '2024-07-02' }
          ],
          materials: [
            { title: 'Material 1', description: 'Description 1', url: 'http://example.com' },
            { title: 'Material 2', description: 'Description 2', url: 'http://example.com' }
          ]
        }, {
          weekNumber: 3,
          weekTema: 'Tema de la semana',
          tasks: [
            { title: 'Task 1', description: 'Description 1', dueDate: '2024-07-01' },
            { title: 'Task 2', description: 'Description 2', dueDate: '2024-07-02' }
          ],
          materials: [
            { title: 'Material 1', description: 'Description 1', url: 'http://example.com' },
            { title: 'Material 2', description: 'Description 2', url: 'http://example.com' }
          ]
        }, {
          weekNumber: 4,
          weekTema: 'Tema de la semana',
          tasks: [
            { title: 'Task 1', description: 'Description 1', dueDate: '2024-07-01' },
            { title: 'Task 2', description: 'Description 2', dueDate: '2024-07-02' }
          ],
          materials: [
            { title: 'Material 1', description: 'Description 1', url: 'http://example.com' },
            { title: 'Material 2', description: 'Description 2', url: 'http://example.com' }
          ]
        }, {
          weekNumber: 5,
          weekTema: 'Tema de la semana',
          tasks: [
            { title: 'Task 1', description: 'Description 1', dueDate: '2024-07-01' },
            { title: 'Task 2', description: 'Description 2', dueDate: '2024-07-02' }
          ],
          materials: [
            { title: 'Material 1', description: 'Description 1', url: 'http://example.com' },
            { title: 'Material 2', description: 'Description 2', url: 'http://example.com' }
          ]
        }, {
          weekNumber: 6,
          weekTema: 'Tema de la semana',
          tasks: [
            { title: 'Task 1', description: 'Description 1', dueDate: '2024-07-01' },
            { title: 'Task 2', description: 'Description 2', dueDate: '2024-07-02' }
          ],
          materials: [
            { title: 'Material 1', description: 'Description 1', url: 'http://example.com' },
            { title: 'Material 2', description: 'Description 2', url: 'http://example.com' }
          ]
        }, {
          weekNumber: 7,
          weekTema: 'Tema de la semana',
          tasks: [
            { title: 'Task 1', description: 'Description 1', dueDate: '2024-07-01' },
            { title: 'Task 2', description: 'Description 2', dueDate: '2024-07-02' }
          ],
          materials: [
            { title: 'Material 1', description: 'Description 1', url: 'http://example.com' },
            { title: 'Material 2', description: 'Description 2', url: 'http://example.com' }
          ]
        }, {
          weekNumber: 8,
          weekTema: 'Tema de la semana',
          tasks: [
            { title: 'Task 1', description: 'Description 1', dueDate: '2024-07-01' },
            { title: 'Task 2', description: 'Description 2', dueDate: '2024-07-02' }
          ],
          materials: [
            { title: 'Material 1', description: 'Description 1', url: 'http://example.com' },
            { title: 'Material 2', description: 'Description 2', url: 'http://example.com' }
          ]
        }, {
          weekNumber: 9,
          weekTema: 'Tema de la semana',
          tasks: [
            { title: 'Task 1', description: 'Description 1', dueDate: '2024-07-01' },
            { title: 'Task 2', description: 'Description 2', dueDate: '2024-07-02' }
          ],
          materials: [
            { title: 'Material 1', description: 'Description 1', url: 'http://example.com' },
            { title: 'Material 2', description: 'Description 2', url: 'http://example.com' }
          ]
        }],
      alumnos: [
        {
          nombreAlumno: 'Carlos Daniel Espinoza Ramirez',
          correo: 'carlos.espinoza23@unmsm.edu.pe'
        }, {
          nombreAlumno: 'Melani Laveriano Porroa',
          correo: 'melani.laveriano@unmsm.edu.pe'
        }
      ],
      rutaSilabo: 'https://classroom.google.com/w/MzQyMDE0NDYxNTY5/t/all',
      rutasLibros: [
        {
          nombreLibro: 'Libro1',
          ruta: 'https://classroom.google.com/w/MzQyMDE0NDYxNTY5/t/all'
        },
        {
          nombreLibro: 'Libro2',
          ruta: 'https://classroom.google.com/w/MzQyMDE0NDYxNTY5/t/all'
        }
      ],
      rutasArticulos: [
        {
          nombreArticulo: 'Articulo1',
          ruta: 'https://classroom.google.com/w/MzQyMDE0NDYxNTY5/t/all'
        },
        {
          nombreArticulo: 'Articulo2',
          ruta: 'https://classroom.google.com/w/MzQyMDE0NDYxNTY5/t/all'
        }

      ]
    },
    {
      courseName: 'Desarrollo de Sistemas Web',
      seccion: 'Melani Laveriano Porroa',
      teacherPhoto: 'assets/images/foto.png',
      credits: 3,
      horario: 'Lunes: de 2:00 pm a 6:00 pm',
      cycle: 'ciclo1',
      color: '',
      weeks: [
        {
          weekNumber: 1,
          weekTema: 'Tema de la semana',
          tasks: [
            { title: 'Task 1', description: 'Description 1', dueDate: '2024-07-01' },
            { title: 'Task 2', description: 'Description 2', dueDate: '2024-07-02' }
          ],
          materials: [
            { title: 'Material 1', description: 'Description 1', url: 'http://example.com' },
            { title: 'Material 2', description: 'Description 2', url: 'http://example.com' }
          ]
        }],
      alumnos: [
        {
          nombreAlumno: 'Carlos Daniel Espinoza Ramirez',
          correo: 'carlos.espinoza23@unmsm.edu.pe'
        }, {
          nombreAlumno: 'Melani Laveriano Porroa',
          correo: 'melani.laveriano@unmsm.edu.pe'
        }
      ],
      rutaSilabo: 'https://classroom.google.com/w/MzQyMDE0NDYxNTY5/t/all',
      rutasLibros: [
        {
          nombreLibro: 'Libro2',
          ruta: 'https://classroom.google.com/w/MzQyMDE0NDYxNTY5/t/all'
        },
        {
          nombreLibro: 'Libro2',
          ruta: 'https://classroom.google.com/w/MzQyMDE0NDYxNTY5/t/all'
        }
      ],
      rutasArticulos: [
        {
          nombreArticulo: 'Articulo1',
          ruta: 'https://classroom.google.com/w/MzQyMDE0NDYxNTY5/t/all'
        },
        {
          nombreArticulo: 'Articulo2',
          ruta: 'https://classroom.google.com/w/MzQyMDE0NDYxNTY5/t/all'
        }

      ]
    }]

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

  getCourseByName(courseName: string): Course | undefined {
    return this.courses.find(course => course.courseName === courseName);
  }

}
