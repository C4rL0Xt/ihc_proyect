import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CoursesServiceService, Course } from '../../servicios/courses-service.service';
import { CursoSService } from '../../servicios/cursoService/curso-s.service';
import { Curso } from 'src/app/core/models/curso.model';
import { Semana } from 'src/app/core/models/semanas.model';

export interface Tile {
  color: string;
  cols: number;
  rows: number;
  text: string;
}

@Component({
  selector: 'app-detalle-curso',
  templateUrl: './detalle-curso.component.html',
  styleUrl: './detalle-curso.component.css'
})
export class DetalleCursoComponent implements OnInit {

  course: Curso | undefined;

  panelOpenState = false;
  nombreCurso: string | null = null;

  semanas: Semana[] = [];

  constructor(private route: ActivatedRoute, private coursesService: CursoSService) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      const nombreCurso = params.get('nombreCurso');
      if (nombreCurso) {
        this.getCurso(nombreCurso);
      } else {
        console.error('No course name in URL');
      }
    });

  }

  getCurso(nombreCurso: string): void {
    this.coursesService.getCursoByNombre(nombreCurso).subscribe((data: Curso) => {
      this.course = data;
      this.coursesService.getSemanasCurso(this.course).subscribe((data: Semana[]) => {
        this.semanas = data;
        console.log('Semanas:', this.semanas);
      });
      console.log('Curso:', this.course);
    });
  }




  sendMessage(email: string) {
    const subject = 'Asunto del correo';
    const body = 'Contenido del correo';

    const gmailLink = `https://mail.google.com/mail/?view=cm&fs=1&to=${email}&su=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;

    window.open(gmailLink, '_blank');
  }

  tiles: Tile[] = [
    { text: 'One', cols: 3, rows: 1, color: 'lightblue' },
    { text: 'Two', cols: 1, rows: 2, color: 'lightgreen' },
    { text: 'Three', cols: 1, rows: 1, color: 'lightpink' },
    { text: 'Four', cols: 2, rows: 1, color: '#DDBDF1' },
  ];






}
