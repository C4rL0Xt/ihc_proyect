import { Component, OnInit } from '@angular/core';
import { Route, Router } from '@angular/router';
import { Course, CoursesServiceService } from '../../servicios/courses-service.service';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { Curso } from 'src/app/core/models/curso.model';
import { CursoSService } from '../../servicios/cursoService/curso-s.service';
import { Observable } from 'rxjs';
import { startWith, map, switchMap } from 'rxjs/operators';
import { SafeUrl, DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-cursos-page',
  templateUrl: './cursos-page.component.html',
  styleUrl: './cursos-page.component.css'
})
export class CursosPageComponent implements OnInit {
  searchQuery: string = '';
  selectedCycle: string = '';



  courses: Curso[] = [];
  randomColors: string[] = [];

  fotoUrl: SafeUrl | null = null


  constructor(
    private cursoService: CursoSService,
    private router: Router,
    private sanitizer: DomSanitizer) { }

  ngOnInit(): void {
    this.loadCursos();

  }

  loadCursos(): void {
    this.cursoService.getCursosAll().subscribe((response: Curso[]) => {
      this.courses = response;
      this.courses.forEach((curso) => this.getFotoProfesor(curso));
      this.courses.forEach((curso) => this.assignRandomColors(curso));

      console.log("Cursos cargados", response);
    })
  }

  filteredCourses(): Curso[] {
    return this.courses.filter(course =>
      (course.ciclo === this.selectedCycle || this.selectedCycle === '') &&
      course.nombrecurso.toLowerCase().includes(this.searchQuery.toLowerCase())
    );
  }

  goToDetails(course: Course): void {
    this.router.navigate(['/home/cursos/detalles'], { state: { course } });
  }

  getFotoProfesor(profesor: Curso): void {
    this.cursoService.getFotoProfesor(profesor.profesorid).subscribe(
      (blob: Blob) => {
        const objectURL = URL.createObjectURL(blob);
        profesor.foto = this.sanitizer.bypassSecurityTrustUrl(objectURL);
        console.log('Foto del profesor obtenida:', this.fotoUrl);
      }, error => {
        console.error('Error al obtener la foto del profesor:', error);
      }
    );
  }

  randomColor(): string {
    const hue = Math.floor(Math.random() * 360); // Tonos de 0 a 360 grados
    const saturation = Math.floor(Math.random() * 50) + 50; // Saturación entre 50% y 100%
    const lightness = Math.floor(Math.random() * 20) + 60; // Luminosidad entre 50% y 70%
    return `hsl(${hue}, ${saturation}%, ${lightness}%)`;
  }

  assignRandomColors(curso: Curso): void {
    curso.color = this.randomColor();
  }



}
