import { Component, OnInit } from '@angular/core';
import { Course, CoursesServiceService } from '../../servicios/courses-service.service';
import { Curso } from 'src/app/core/models/curso.model';
import { CursoSService } from '../../servicios/cursoService/curso-s.service';
import { DomSanitizer, SafeUrl } from '@angular/platform-browser';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrl: './main-page.component.css'
})

export class MainPageComponent implements OnInit {

  courses: Curso[] = [];
  randomColors: String[] = [];

  fotoUrl: SafeUrl | null = null
  constructor(private cursoService: CursoSService,
    private sanitizer: DomSanitizer
  ) { }

  ngOnInit(): void {
    this.loadCursos();
  }

  loadCursos(): void {
    /*this.cursoService.getCursosAll().subscribe((response: Curso[]) => {
      this.courses = response;
      this.courses.forEach((curso) => this.assignRandomColors(curso));

    })*/
    this.cursoService.getMyCourses().subscribe((response: Curso[]) => {
      this.courses = response;
      this.courses.forEach((curso) => this.getFotoProfesor(curso));
      this.courses.forEach((curso) => this.assignRandomColors(curso));
    });
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
}
