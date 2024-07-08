import { Component, OnInit  } from '@angular/core';
import { Curso } from 'src/app/core/models/curso.model';
import { ServicioProfesorService } from '../../services/servicio-profesor.service';

@Component({
  selector: 'app-main-pagep',
  templateUrl: './main-pagep.component.html',
  styleUrl: './main-pagep.component.css'
})
export class MainPagepComponent implements OnInit  {
  courses: Curso[] = [];
  randomColors: String[] = [];

  constructor(private serviceProfesor: ServicioProfesorService) { }

  ngOnInit(): void {
    this.loadCursos();
  }

  loadCursos(): void {
    this.serviceProfesor.getCursosAll().subscribe((response:Curso[]) =>{
      this.courses = response;
      this.courses.forEach((curso) => this.assignRandomColors(curso));
        
    })
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
