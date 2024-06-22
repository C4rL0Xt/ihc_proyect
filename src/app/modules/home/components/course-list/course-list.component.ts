import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-course-list',
  templateUrl: './course-list.component.html',
  styleUrl: './course-list.component.css'
})
export class CourseListComponent implements OnInit{
  courses = [
    { id: 1, name: 'Course 1', description: 'Description for course 1' },
    { id: 2, name: 'Course 2', description: 'Description for course 2' },
    { id: 3, name: 'Course 3', description: 'Description for course 3' }
    // Agrega más cursos según sea necesario
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
