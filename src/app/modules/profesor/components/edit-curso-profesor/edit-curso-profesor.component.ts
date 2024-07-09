import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute } from '@angular/router';
import { Curso } from 'src/app/core/models/curso.model';
import { MaterialE } from 'src/app/core/models/materialExtra.model';
import { Semana } from 'src/app/core/models/semanas.model';
import { CrearSemanaComponent } from 'src/app/modules/cursos/componentes/crear-semana/crear-semana.component';
import { CursoSService } from 'src/app/modules/cursos/servicios/cursoService/curso-s.service';
import { EditSemanaProfesorComponent } from '../edit-semana-profesor/edit-semana-profesor.component';
import { SemanaAlone } from 'src/app/core/models/semanaAlone.model';
import { EditTareaProfesorComponent } from '../edit-tarea-profesor/edit-tarea-profesor.component';
import { Tarea } from 'src/app/core/models/tarea.model';
import { Material } from 'src/app/core/models/Material.model';
import { EditMaterialProfesorComponent } from '../edit-material-profesor/edit-material-profesor.component';

@Component({
  selector: 'app-edit-curso-profesor',
  templateUrl: './edit-curso-profesor.component.html',
  styleUrl: './edit-curso-profesor.component.css'
})
export class EditCursoProfesorComponent implements OnInit {

  course: Curso | undefined;
  panelOpenState = false;
  nombreCurso: string | null = null;
  idDeCurso: string | null = null;
  semanas: Semana[] = [];
  semanasAlone: SemanaAlone[] = [];
  material: MaterialE | undefined;
  courses: Curso[] = [];
  materialesE: MaterialE[] = [];
  materialesOfCourse: MaterialE[] = [];
  nombre_curso: string | null = null;

  constructor(
    private dialog: MatDialog, private route: ActivatedRoute, private coursesService: CursoSService
  ) { }

  ngOnInit(): void {

    this.loadMaterialesPorCurso();
    this.cargarParam();

  }

  cargarParam(): void {
    this.route.paramMap.subscribe(params => {
      this.idDeCurso = params.get('idCurso');
      const nombreCurso = params.get('nombreCurso');

      if (nombreCurso) {
        this.nombre_curso = nombreCurso;
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

      this.coursesService.getSemanasCursoAlone(this.course).subscribe((data: SemanaAlone[]) => {
        this.semanasAlone = data;
        console.log('Semanas:', this.semanasAlone);
      });

      console.log('Curso:', this.course);
    });
  }

  loadMaterialesPorCurso(): void {
    this.route.paramMap.subscribe(params => {
      const idCurso = params.get('idCurso');
      if (idCurso) {
        this.loadMateriales(idCurso);
      }
    });
  }

  loadMateriales(idCurso: string): void {
    this.coursesService.getMateriales().subscribe((response: MaterialE[]) => {
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
      data: { cursoId: this.idDeCurso }
    });

    dialogRef.afterClosed().subscribe(result => {
      this.loadMaterialesPorCurso();
      this.cargarParam();
      if (result) {
        // Aquí puedes manejar el resultado, como añadir la nueva semana a la lista
        console.log('Nueva semana creada:', result);
        this.getCurso(this.nombre_curso || '');


      }
    });
  }

  openActualizarSemana(semanaIndex: number, event: Event) {
    event.stopPropagation(); // Detener la propagación del evento
  
    const semanaAlone = this.semanasAlone[semanaIndex];
    if (semanaAlone) {
      const dialogSem = this.dialog.open(EditSemanaProfesorComponent, {
        width: '700px',
        height: '400px',
        data: { cursoId: this.idDeCurso, semana: semanaAlone }
      });
  
      dialogSem.afterClosed().subscribe(result => {
        this.loadMaterialesPorCurso();
        this.cargarParam();
        if (result) {
          console.log('Semana actualizada', result);
          this.getCurso(this.nombre_curso || '');
        }
      });
    } else {
      console.error('No ID for this week');
    }
  }

  openActualizarTarea(tarea: Tarea) : void{
    const dialogRef = this.dialog.open(EditTareaProfesorComponent, {
      width: '700px',
      height: '400px',
      data: { tarea: tarea}
    });
  
    dialogRef.afterClosed().subscribe(result => {
      this.loadMaterialesPorCurso();
        this.cargarParam();
      if (result) {
        console.log('Tareas actualizada', result);
      }
    });
  }

  openActualizarMaterial(material: Material) : void{
    const dial = this.dialog.open(EditMaterialProfesorComponent, {
      width: '700px',
      height: '400px',
      data: { material: material}
    });
  
    dial.afterClosed().subscribe(result => {
      this.loadMaterialesPorCurso();
        this.cargarParam();
      if (result) {
        console.log('Material actualizado', result);
      }
    });
  }


}
