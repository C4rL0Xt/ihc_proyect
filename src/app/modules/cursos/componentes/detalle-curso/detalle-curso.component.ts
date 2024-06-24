import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CoursesServiceService,Course } from '../../servicios/courses-service.service';

@Component({
  selector: 'app-detalle-curso',
  templateUrl: './detalle-curso.component.html',
  styleUrl: './detalle-curso.component.css'
})
export class DetalleCursoComponent implements OnInit {

  course: Course | undefined;

  panelOpenState = false;
  nombreCurso: string | null = '';

  constructor(private route: ActivatedRoute, private coursesService: CoursesServiceService) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      const nombreCurso = params.get('nombreCurso');
      if (nombreCurso) {
        this.course = this.coursesService.getCourseByName(nombreCurso);
      } else {
        console.error('No course name in URL');
      }
    });
  }

  





}
