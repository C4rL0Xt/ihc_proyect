import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Curso } from 'src/app/core/models/curso.model';
import { MaterialE } from 'src/app/core/models/materialExtra.model';
import { Semana } from 'src/app/core/models/semanas.model';
import { ServicioProfesorService } from '../../services/servicio-profesor.service';
import { MatDialog } from '@angular/material/dialog';
import { CrearSemanaComponent } from '../crear-semana/crear-semana.component';

@Component({
  selector: 'app-detalle-profesor',
  templateUrl: './detalle-profesor.component.html',
  styleUrl: './detalle-profesor.component.css'
})
export class DetalleProfesorComponent implements OnInit{
  course: Curso | undefined;
  panelOpenState = false;
  nombreCurso: string | null = null;
  idDeCurso: string | null = null;
  semanas: Semana[] = [];

  material: MaterialE | undefined;
  courses: Curso[] = [];
  materialesE: MaterialE[] = [];
  materialesOfCourse: MaterialE[] = [];

  constructor(private dialog: MatDialog ,private route: ActivatedRoute, private profesorService: ServicioProfesorService) { }

  ngOnInit(): void {
    this.loadMaterialesPorCurso();

    this.route.paramMap.subscribe(params => {
      this.idDeCurso = params.get('idCurso');
      const nombreCurso = params.get('nombreCurso');
      
      if (nombreCurso) {
        this.getCurso(nombreCurso);
      } else {
        console.error('No course name in URL');
      }
    });

  }

  getCurso(nombreCurso: string): void {
    this.profesorService.getCursoByNombre(nombreCurso).subscribe((data: Curso) => {
      this.course = data;
      this.profesorService.getSemanasCurso(this.course).subscribe((data: Semana[]) => {
        this.semanas = data;
        console.log('Semanas:', this.semanas);
      });
      console.log('Curso:', this.course);
    });
  }

  loadMaterialesPorCurso():void {
    this.route.paramMap.subscribe(params => {
      const idCurso = params.get('idCurso');
      if (idCurso) {
        this.loadMateriales(idCurso);
      }
    });
  }

  loadMateriales(idCurso: string): void {
    this.profesorService.getMateriales().subscribe((response: MaterialE[]) => {
      this.materialesE = response;
      this.materialesOfCourse = this.materialesE.filter(material => material.cursoid === idCurso);
      console.log("Materiales extra cargados", this.materialesOfCourse);
    });
  }

  sendMessage(email: string) {
    const subject = 'Asunto del correo';
    const body = 'Contenido del correo';

    const gmailLink = `https://mail.google.com/mail/?view=cm&fs=1&to=${email}&su=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;

    window.open(gmailLink, '_blank');
  }

  openCrearSemanaDialog() {
    const dialogRef = this.dialog.open(CrearSemanaComponent, {
      width: '700px',
      height: '600px',
      data: {cursoId: this.idDeCurso}
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        // Aquí puedes manejar el resultado, como añadir la nueva semana a la lista
        console.log('Nueva semana creada:', result);
      }
    });
  }
  
}
