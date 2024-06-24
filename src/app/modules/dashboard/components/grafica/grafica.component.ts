import { Component } from '@angular/core';
import { Observable, of } from 'rxjs';

export interface CourseGrade {
  semester: string;
  course: string;
  grade: string;
}

const ELEMENT_DATA: CourseGrade[] = [
  { semester: 'Fall 2023', course: 'Math 101', grade: 'A' },
  { semester: 'Fall 2023', course: 'Physics 101', grade: 'B+' },
  { semester: 'Spring 2024', course: 'Chemistry 101', grade: 'A-' },
  { semester: 'Spring 2024', course: 'Biology 101', grade: 'B' },
  { semester: 'Spring 2024', course: 'Biology 101', grade: 'B' },
  { semester: 'Spring 2024', course: 'Biology 101', grade: 'B' },
  { semester: 'Spring 2024', course: 'Biology 101', grade: 'B' },
];

@Component({
  selector: 'app-grafica',
  templateUrl: './grafica.component.html',
  styleUrl: './grafica.component.css'
})
export class GraficaComponent {
  displayedColumns: string[] = ['semester', 'course', 'grade'];
  dataSource = ELEMENT_DATA;
}
