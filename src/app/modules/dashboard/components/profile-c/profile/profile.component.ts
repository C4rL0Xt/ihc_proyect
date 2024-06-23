import { Component, OnInit } from '@angular/core';
import { StudentService } from '../../../services/service-est/student.service';


interface Course {
  name: string;
  description: string;
}

interface Student {
  firstName: string;
  lastName: string;
  school: string;
  cycle: string;
  courses: Course[];
}

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrl: './profile.component.css'
})
export class ProfileComponent {
  user = {
    name: 'Espinoza Ramirez, Carlos Daniel',
    role: 'Estudiante',
    facultad: 'Ingeniería de Sistemas',
    especialidad: 'E.P. de Ingeniería de Sistemas',
    periodo: '2024-1',
    celular: '994343434',
    correo: 'carlos.espinoza23@unmsm.edu.pe',
    plan: '2018',
    ciclo: 'VII'
  };
}
