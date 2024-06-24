import { Component, OnInit } from '@angular/core';
import { Course, CoursesServiceService } from '../../servicios/courses-service.service';


@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrl: './main-page.component.css'
})

export class MainPageComponent implements OnInit {

  courses: Course[] = [];
  randomColors: String[] = [];
  
  constructor(private courseService: CoursesServiceService) { }

  ngOnInit(): void {
    this.courses = this.courseService.getCourses();
    this.randomColors = this.courseService.getColorAleatorio();

  }

  randomColor(): string {
    const hue = Math.floor(Math.random() * 360); // Tonos de 0 a 360 grados
    const saturation = Math.floor(Math.random() * 50) + 50; // Saturación entre 50% y 100%
    const lightness = Math.floor(Math.random() * 20) + 50; // Luminosidad entre 50% y 70%
    return `hsl(${hue}, ${saturation}%, ${lightness}%)`;
  }



}
