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
    this.generateRandomColors();
  }

  generateRandomColors() {
    for (let i = 0; i < this.courses.length; i++) {
      this.randomColors.push(this.getRandomColor());
    }
  }

  getRandomColor(): string {
    const hue = Math.floor(Math.random() * 360);
    const saturation = Math.floor(Math.random() * 31) + 60;
    const lightness = Math.floor(Math.random() * 21) + 70;
    return `hsl(${hue}, ${saturation}%, ${lightness}%)`;
  }

  filteredCourses(): Course[] {
    return this.courses.filter(course =>
      (course.cycle === this.selectedCycle || this.selectedCycle === '') &&
      course.courseName.toLowerCase().includes(this.searchQuery.toLowerCase())
    );
  }
}
