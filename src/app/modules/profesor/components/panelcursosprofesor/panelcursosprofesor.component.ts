import { Component, OnInit } from '@angular/core';
import { Curso } from 'src/app/core/models/curso.model';
import { ProfesorService } from '../../services/profesor.service';
import { DomSanitizer, SafeUrl } from '@angular/platform-browser';
import { CursoSService } from 'src/app/modules/cursos/servicios/cursoService/curso-s.service';

@Component({
  selector: 'app-panelcursosprofesor',
  templateUrl: './panelcursosprofesor.component.html',
  styleUrl: './panelcursosprofesor.component.css'
})
export class PanelcursosprofesorComponent implements OnInit {

  courses: Curso[] = [];
  randomColors: string[] = [];
  selectedCycle: string = '';
  searchQuery: string = '';
  fotoUrl: SafeUrl | null = null
  constructor(
    private profesorService: ProfesorService,
    private sanitizer: DomSanitizer,
    private cursoService: CursoSService,
  ) { }

  ngOnInit(): void {
    console.log('Panel de cursos del profesor');
    this.loadCursos();
  }

  loadCursos(): void {
    this.profesorService.getMyCourse().subscribe((response: Curso[]) => {
      this.courses = response;
      this.courses.forEach((curso) => this.assignRandomColors(curso));
    });
  }

  filteredCourses(): Curso[] {
    return this.courses.filter(course =>
      (course.ciclo === this.selectedCycle || this.selectedCycle === '') &&
      course.nombre_curso.toLowerCase().includes(this.searchQuery.toLowerCase())
    );
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
