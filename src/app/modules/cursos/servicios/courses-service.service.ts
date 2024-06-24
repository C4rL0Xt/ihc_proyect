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
  tasks: Task[];
  materials: Material[];
}

export interface Course {
  courseName: string;
  teacherName: string;
  teacherPhoto: string;
  credits: number;
  horario: string;
  cycle: string;
  color: string;
  weeks: Week[]; // Nueva propiedad para las semanas
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
      color: '',
      weeks: [
        {
          weekNumber: 1,
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
          tasks: [
            { title: 'Task 1', description: 'Description 1', dueDate: '2024-07-01' },
            { title: 'Task 2', description: 'Description 2', dueDate: '2024-07-02' }
          ],
          materials: [
            { title: 'Material 1', description: 'Description 1', url: 'http://example.com' },
            { title: 'Material 2', description: 'Description 2', url: 'http://example.com' }
          ]
        }]
    },
    {
      courseName: 'Desarrollo de Sistemas Web',
      teacherName: 'Melani Laveriano Porroa',
      teacherPhoto: 'assets/images/foto.png',
      credits: 3,
      horario: 'Lunes: de 2:00 pm a 6:00 pm',
      cycle: 'ciclo1',
      color: '',
      weeks: [
        {
          weekNumber: 1,
          tasks: [
            { title: 'Task 1', description: 'Description 1', dueDate: '2024-07-01' },
            { title: 'Task 2', description: 'Description 2', dueDate: '2024-07-02' }
          ],
          materials: [
            { title: 'Material 1', description: 'Description 1', url: 'http://example.com' },
            { title: 'Material 2', description: 'Description 2', url: 'http://example.com' }
          ]
        }]
    },
    {
      courseName: 'Base de datos',
      teacherName: 'Espinoza Robles Armando',
      teacherPhoto: 'assets/images/foto.png',
      credits: 4,
      horario: 'Lunes: de 2:00 pm a 6:00 pm',
      cycle: 'ciclo1',
      color: '',
      weeks: [
        {
          weekNumber: 1,
          tasks: [
            { title: 'Task 1', description: 'Description 1', dueDate: '2024-07-01' },
            { title: 'Task 2', description: 'Description 2', dueDate: '2024-07-02' }
          ],
          materials: [
            { title: 'Material 1', description: 'Description 1', url: 'http://example.com' },
            { title: 'Material 2', description: 'Description 2', url: 'http://example.com' }
          ]
        }]
    },
    {
      courseName: 'Curso de ciclo 1',
      teacherName: 'Espinoza Robles Armando',
      teacherPhoto: 'assets/images/foto.png',
      credits: 4,
      horario: 'Lunes: de 2:00 pm a 6:00 pm',
      cycle: 'ciclo1',
      color: '',
      weeks: [
        {
          weekNumber: 1,
          tasks: [
            { title: 'Task 1', description: 'Description 1', dueDate: '2024-07-01' },
            { title: 'Task 2', description: 'Description 2', dueDate: '2024-07-02' }
          ],
          materials: [
            { title: 'Material 1', description: 'Description 1', url: 'http://example.com' },
            { title: 'Material 2', description: 'Description 2', url: 'http://example.com' }
          ]
        }]
    },
    {
      courseName: 'Curso de ciclo 2',
      teacherName: 'Espinoza Robles Armando',
      teacherPhoto: 'assets/images/foto.png',
      credits: 4,
      horario: 'Lunes: de 2:00 pm a 6:00 pm',
      cycle: 'ciclo2',
      color: '',
      weeks: [
        {
          weekNumber: 1,
          tasks: [
            { title: 'Task 1', description: 'Description 1', dueDate: '2024-07-01' },
            { title: 'Task 2', description: 'Description 2', dueDate: '2024-07-02' }
          ],
          materials: [
            { title: 'Material 1', description: 'Description 1', url: 'http://example.com' },
            { title: 'Material 2', description: 'Description 2', url: 'http://example.com' }
          ]
        }]
    },
    {
      courseName: 'Curso de ciclo 2',
      teacherName: 'Espinoza Robles Armando',
      teacherPhoto: 'assets/images/foto.png',
      credits: 4,
      horario: 'Lunes: de 2:00 pm a 6:00 pm',
      cycle: 'ciclo2',
      color: '',
      weeks: [
        {
          weekNumber: 1,
          tasks: [
            { title: 'Task 1', description: 'Description 1', dueDate: '2024-07-01' },
            { title: 'Task 2', description: 'Description 2', dueDate: '2024-07-02' }
          ],
          materials: [
            { title: 'Material 1', description: 'Description 1', url: 'http://example.com' },
            { title: 'Material 2', description: 'Description 2', url: 'http://example.com' }
          ]
        }]
    },
    {
      courseName: 'Curso de ciclo 2',
      teacherName: 'Espinoza Robles Armando',
      teacherPhoto: 'assets/images/foto.png',
      credits: 4,
      horario: 'Lunes: de 2:00 pm a 6:00 pm',
      cycle: 'ciclo2',
      color: '',
      weeks: [
        {
          weekNumber: 1,
          tasks: [
            { title: 'Task 1', description: 'Description 1', dueDate: '2024-07-01' },
            { title: 'Task 2', description: 'Description 2', dueDate: '2024-07-02' }
          ],
          materials: [
            { title: 'Material 1', description: 'Description 1', url: 'http://example.com' },
            { title: 'Material 2', description: 'Description 2', url: 'http://example.com' }
          ]
        }]
    },
    {
      courseName: 'Curso de ciclo 2',
      teacherName: 'Espinoza Robles Armando',
      teacherPhoto: 'assets/images/foto.png',
      credits: 4,
      horario: 'Lunes: de 2:00 pm a 6:00 pm',
      cycle: 'ciclo2',
      color: '',
      weeks: [
        {
          weekNumber: 1,
          tasks: [
            { title: 'Task 1', description: 'Description 1', dueDate: '2024-07-01' },
            { title: 'Task 2', description: 'Description 2', dueDate: '2024-07-02' }
          ],
          materials: [
            { title: 'Material 1', description: 'Description 1', url: 'http://example.com' },
            { title: 'Material 2', description: 'Description 2', url: 'http://example.com' }
          ]
        }]
    },
    {
      courseName: 'Curso de ciclo 2',
      teacherName: 'Espinoza Robles Armando',
      teacherPhoto: 'assets/images/foto.png',
      credits: 4,
      horario: 'Lunes: de 2:00 pm a 6:00 pm',
      cycle: 'ciclo2',
      color: '',
      weeks: [
        {
          weekNumber: 1,
          tasks: [
            { title: 'Task 1', description: 'Description 1', dueDate: '2024-07-01' },
            { title: 'Task 2', description: 'Description 2', dueDate: '2024-07-02' }
          ],
          materials: [
            { title: 'Material 1', description: 'Description 1', url: 'http://example.com' },
            { title: 'Material 2', description: 'Description 2', url: 'http://example.com' }
          ]
        }]
    },
    {
      courseName: 'Curso de ciclo 2',
      teacherName: 'Espinoza Robles Armando',
      teacherPhoto: 'assets/images/foto.png',
      credits: 4,
      horario: 'Lunes: de 2:00 pm a 6:00 pm',
      cycle: 'ciclo2',
      color: '',
      weeks: [
        {
          weekNumber: 1,
          tasks: [
            { title: 'Task 1', description: 'Description 1', dueDate: '2024-07-01' },
            { title: 'Task 2', description: 'Description 2', dueDate: '2024-07-02' }
          ],
          materials: [
            { title: 'Material 1', description: 'Description 1', url: 'http://example.com' },
            { title: 'Material 2', description: 'Description 2', url: 'http://example.com' }
          ]
        }]
    },
    {
      courseName: 'Curso de ciclo 2',
      teacherName: 'Espinoza Robles Armando',
      teacherPhoto: 'assets/images/foto.png',
      credits: 4,
      horario: 'Lunes: de 2:00 pm a 6:00 pm',
      cycle: 'ciclo2',
      color: '',
      weeks: [
        {
          weekNumber: 1,
          tasks: [
            { title: 'Task 1', description: 'Description 1', dueDate: '2024-07-01' },
            { title: 'Task 2', description: 'Description 2', dueDate: '2024-07-02' }
          ],
          materials: [
            { title: 'Material 1', description: 'Description 1', url: 'http://example.com' },
            { title: 'Material 2', description: 'Description 2', url: 'http://example.com' }
          ]
        }]
    },
    {
      courseName: 'Curso de ciclo 2',
      teacherName: 'Espinoza Robles Armando',
      teacherPhoto: 'assets/images/foto.png',
      credits: 4,
      horario: 'Lunes: de 2:00 pm a 6:00 pm',
      cycle: 'ciclo2',
      color: '',
      weeks: [
        {
          weekNumber: 1,
          tasks: [
            { title: 'Task 1', description: 'Description 1', dueDate: '2024-07-01' },
            { title: 'Task 2', description: 'Description 2', dueDate: '2024-07-02' }
          ],
          materials: [
            { title: 'Material 1', description: 'Description 1', url: 'http://example.com' },
            { title: 'Material 2', description: 'Description 2', url: 'http://example.com' }
          ]
        }]
    },
    {
      courseName: 'Curso de ciclo 2',
      teacherName: 'Espinoza Robles Armando',
      teacherPhoto: 'assets/images/foto.png',
      credits: 4,
      horario: 'Lunes: de 2:00 pm a 6:00 pm',
      cycle: 'ciclo2',
      color: '',
      weeks: [
        {
          weekNumber: 1,
          tasks: [
            { title: 'Task 1', description: 'Description 1', dueDate: '2024-07-01' },
            { title: 'Task 2', description: 'Description 2', dueDate: '2024-07-02' }
          ],
          materials: [
            { title: 'Material 1', description: 'Description 1', url: 'http://example.com' },
            { title: 'Material 2', description: 'Description 2', url: 'http://example.com' }
          ]
        }]
    },
    {
      courseName: 'Curso de ciclo 2',
      teacherName: 'Espinoza Robles Armando',
      teacherPhoto: 'assets/images/foto.png',
      credits: 4,
      horario: 'Lunes: de 2:00 pm a 6:00 pm',
      cycle: 'ciclo2',
      color: '',
      weeks: [
        {
          weekNumber: 1,
          tasks: [
            { title: 'Task 1', description: 'Description 1', dueDate: '2024-07-01' },
            { title: 'Task 2', description: 'Description 2', dueDate: '2024-07-02' }
          ],
          materials: [
            { title: 'Material 1', description: 'Description 1', url: 'http://example.com' },
            { title: 'Material 2', description: 'Description 2', url: 'http://example.com' }
          ]
        }]
    },
    {
      courseName: 'Curso de ciclo 2',
      teacherName: 'Espinoza Robles Armando',
      teacherPhoto: 'assets/images/foto.png',
      credits: 4,
      horario: 'Lunes: de 2:00 pm a 6:00 pm',
      cycle: 'ciclo2',
      color: '',
      weeks: [
        {
          weekNumber: 1,
          tasks: [
            { title: 'Task 1', description: 'Description 1', dueDate: '2024-07-01' },
            { title: 'Task 2', description: 'Description 2', dueDate: '2024-07-02' }
          ],
          materials: [
            { title: 'Material 1', description: 'Description 1', url: 'http://example.com' },
            { title: 'Material 2', description: 'Description 2', url: 'http://example.com' }
          ]
        }]
    },
    {
      courseName: 'Curso de ciclo 2',
      teacherName: 'Espinoza Robles Armando',
      teacherPhoto: 'assets/images/foto.png',
      credits: 4,
      horario: 'Lunes: de 2:00 pm a 6:00 pm',
      cycle: 'ciclo2',
      color: '',
      weeks: [
        {
          weekNumber: 1,
          tasks: [
            { title: 'Task 1', description: 'Description 1', dueDate: '2024-07-01' },
            { title: 'Task 2', description: 'Description 2', dueDate: '2024-07-02' }
          ],
          materials: [
            { title: 'Material 1', description: 'Description 1', url: 'http://example.com' },
            { title: 'Material 2', description: 'Description 2', url: 'http://example.com' }
          ]
        }]
    },
    {
      courseName: 'Curso de ciclo 2',
      teacherName: 'Espinoza Robles Armando',
      teacherPhoto: 'assets/images/foto.png',
      credits: 4,
      horario: 'Lunes: de 2:00 pm a 6:00 pm',
      cycle: 'ciclo2',
      color: '',
      weeks: [
        {
          weekNumber: 1,
          tasks: [
            { title: 'Task 1', description: 'Description 1', dueDate: '2024-07-01' },
            { title: 'Task 2', description: 'Description 2', dueDate: '2024-07-02' }
          ],
          materials: [
            { title: 'Material 1', description: 'Description 1', url: 'http://example.com' },
            { title: 'Material 2', description: 'Description 2', url: 'http://example.com' }
          ]
        }]
    },
    {
      courseName: 'Curso de ciclo 2',
      teacherName: 'Espinoza Robles Armando',
      teacherPhoto: 'assets/images/foto.png',
      credits: 4,
      horario: 'Lunes: de 2:00 pm a 6:00 pm',
      cycle: 'ciclo2',
      color: '',
      weeks: [
        {
          weekNumber: 1,
          tasks: [
            { title: 'Task 1', description: 'Description 1', dueDate: '2024-07-01' },
            { title: 'Task 2', description: 'Description 2', dueDate: '2024-07-02' }
          ],
          materials: [
            { title: 'Material 1', description: 'Description 1', url: 'http://example.com' },
            { title: 'Material 2', description: 'Description 2', url: 'http://example.com' }
          ]
        }]
    },
    {
      courseName: 'Curso de ciclo 2',
      teacherName: 'Espinoza Robles Armando',
      teacherPhoto: 'assets/images/foto.png',
      credits: 4,
      horario: 'Lunes: de 2:00 pm a 6:00 pm',
      cycle: 'ciclo2',
      color: '',
      weeks: [
        {
          weekNumber: 1,
          tasks: [
            { title: 'Task 1', description: 'Description 1', dueDate: '2024-07-01' },
            { title: 'Task 2', description: 'Description 2', dueDate: '2024-07-02' }
          ],
          materials: [
            { title: 'Material 1', description: 'Description 1', url: 'http://example.com' },
            { title: 'Material 2', description: 'Description 2', url: 'http://example.com' }
          ]
        },
        {
          weekNumber: 2,
          tasks: [
            { title: 'Task 1', description: 'Description 1', dueDate: '2024-07-01' },
            { title: 'Task 2', description: 'Description 2', dueDate: '2024-07-02' }
          ],
          materials: [
            { title: 'Material 1', description: 'Description 1', url: 'http://example.com' },
            { title: 'Material 2', description: 'Description 2', url: 'http://example.com' }
          ]
        }]
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

  getCourseByName(courseName: string): Course | undefined {
    return this.courses.find(course => course.courseName === courseName);
  }

}
