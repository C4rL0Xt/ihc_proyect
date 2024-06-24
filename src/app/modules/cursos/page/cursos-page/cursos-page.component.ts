import { Component, OnInit } from '@angular/core';
import { Course, CoursesServiceService } from '../../servicios/courses-service.service';

@Component({
  selector: 'app-cursos-page',
  templateUrl: './cursos-page.component.html',
  styleUrl: './cursos-page.component.css'
})
export class CursosPageComponent implements OnInit {
  searchQuery: string = '';
  selectedCycle: string = '';

  courses: Course[] = [];
  randomColors: string[] = [];

  constructor(private courseService: CoursesServiceService) { }

  ngOnInit(): void {
    this.courses = this.courseService.getCourses();
    this.randomColors = this.courseService.getColorAleatorio();
  }

  filteredCourses(): Course[] {
    return this.courses.filter(course =>
      (course.cycle === this.selectedCycle || this.selectedCycle === '') &&
      course.courseName.toLowerCase().includes(this.searchQuery.toLowerCase())
    );
  }
}
