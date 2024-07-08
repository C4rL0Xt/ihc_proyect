import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DetalleCursoComponent } from './componentes/detalle-curso/detalle-curso.component';
import { CursosPageComponent } from './page/cursos-page/cursos-page.component';
import { BibliotecaComponent } from './componentes/biblioteca/biblioteca.component';
import { DetalleCursoProfesorComponent } from './componentes/detalle-curso-profesor/detalle-curso-profesor.component';
import { CrearSemanaComponent } from './componentes/crear-semana/crear-semana.component';

const routes: Routes = [
  {
    path: 'all',
    component: CursosPageComponent
  },
  {
    path: 'detalles/:idCurso/:nombreCurso',
    component: DetalleCursoProfesorComponent

  }, {
    path: '',
    redirectTo: 'all',
    pathMatch: 'full'
  },{
    path: 'biblioteca',
    component: BibliotecaComponent
  },{
    path: 'crearsemana',
    component: CrearSemanaComponent

  }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CursosRoutingModule { }
