import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PanelcursosprofesorComponent } from './components/panelcursosprofesor/panelcursosprofesor.component';
import { DetalleCursoProfesorComponent } from '../cursos/componentes/detalle-curso-profesor/detalle-curso-profesor.component';
import { EditCursoProfesorComponent } from './components/edit-curso-profesor/edit-curso-profesor.component';

const routes: Routes = [
  {
    path: 'all',
    component: PanelcursosprofesorComponent
  }, {
    path: 'detalles/:idCurso/:nombreCurso',
    component: EditCursoProfesorComponent
  }, {
    path: '',
    redirectTo: 'all',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProfesorRoutingModule { }
