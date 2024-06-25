import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CursosProfesorComponent } from './componentes/cursos-profesor/cursos-profesor.component';
import { DetalleProfesorComponent } from './componentes/detalle-profesor/detalle-profesor.component';

const routes: Routes = [
  {
    path: 'all',
    component: CursosProfesorComponent
  },
  {
    path: 'detalles/:nombreCurso',
    component: DetalleProfesorComponent

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
export class CursoprofesorRoutingModule { }
