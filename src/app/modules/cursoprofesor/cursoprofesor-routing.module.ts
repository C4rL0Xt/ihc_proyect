import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CursoPagepComponent } from './page/curso-pagep/curso-pagep.component';
import { DetalleProfesorComponent } from './componentes/detalle-profesor/detalle-profesor.component';
import { BibliotecapComponent } from './componentes/bibliotecap/bibliotecap.component';
import { CrearSemanaComponent } from './componentes/crear-semana/crear-semana.component';

const routes: Routes = [
  {
    path: 'all',
    component: CursoPagepComponent
  },
  {
    path: 'detalles/:idCurso/:nombreCurso',
    component: DetalleProfesorComponent

  }, {
    path: '',
    redirectTo: 'all',
    pathMatch: 'full'
  },{
    path: 'biblioteca',
    component: BibliotecapComponent
  },{
    path: 'crearsemana',
    component: CrearSemanaComponent

  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CursoprofesorRoutingModule { }
