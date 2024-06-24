import { Component, OnInit } from '@angular/core';
import { Route, Router } from '@angular/router';
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

  constructor(private courseService: CoursesServiceService,private router:Router) { }

  ngOnInit(): void {
    this.courses = this.courseService.getCourses();
  }

  filteredCourses(): Course[] {
    return this.courses.filter(course =>
      (course.cycle === this.selectedCycle || this.selectedCycle === '') &&
      course.courseName.toLowerCase().includes(this.searchQuery.toLowerCase())
    );
  }

  goToDetails(course: Course): void {
    this.router.navigate(['/home/cursos/detalles'], { state: { course } });
  }
}
