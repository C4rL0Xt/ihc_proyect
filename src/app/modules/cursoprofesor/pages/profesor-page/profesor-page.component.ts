import { Component, OnInit } from '@angular/core';
import { Course, ServicioProfesorService } from '../../services/servicio-profesor.service';

@Component({
  selector: 'app-profesor-page',
  templateUrl: './profesor-page.component.html',
  styleUrl: './profesor-page.component.css'
})
export class ProfesorPageComponent implements OnInit {
  courses: Course[] = [];
  randomColors: String[] = [];

  constructor(private courseService: ServicioProfesorService) { }

  ngOnInit(): void {
    this.courses = this.courseService.getCourses();
  }
}
