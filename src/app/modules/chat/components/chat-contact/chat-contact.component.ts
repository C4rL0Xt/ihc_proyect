import { Component } from '@angular/core';
import { CoursesServiceService, Course } from 'src/app/modules/cursos/servicios/courses-service.service';

@Component({
  selector: 'app-chat-contact',
  templateUrl: './chat-contact.component.html',
  styleUrl: './chat-contact.component.css'
})
export class ChatContactComponent {
  courses: Course[] = [];
  randomColors: String[] = [];
  
  constructor(private courseService: CoursesServiceService) { }

  ngOnInit(): void {
    this.courses = this.courseService.getCourses();
  }
}
