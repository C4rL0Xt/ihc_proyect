import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CursosPageComponent } from '../../page/cursos-page/cursos-page.component';

@Component({
  selector: 'app-detalle-curso',
  templateUrl: './detalle-curso.component.html',
  styleUrl: './detalle-curso.component.css'
})
export class DetalleCursoComponent implements OnInit {

  nombreCurso: string | null = '';

  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      this.nombreCurso = params.get('nombreCurso');
    })
  }

}
