import { Component, OnInit } from '@angular/core';
import { Course, CoursesServiceService } from '../../servicios/courses-service.service';


@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrl: './main-page.component.css'
})

export class MainPageComponent implements OnInit {
  courses: Course[] = [];

  constructor(private courseService: CoursesServiceService) { }

  ngOnInit(): void {
    this.courses = this.courseService.getCourses();
  }

}
