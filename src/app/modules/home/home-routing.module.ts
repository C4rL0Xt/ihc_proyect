import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { DashboardPageComponent } from '../dashboard/pages/dashboard-page/dashboard-page.component';
import { CursosPageComponent } from '../cursos/page/cursos-page/cursos-page.component';
import { InicioPageComponent } from './pages/inicio-page/inicio-page/inicio-page.component';
import { MainPageComponent } from '../cursos/page/main-page/main-page.component';
import {ChatPageComponent} from '../chat/pages/chat-page/chat-page.component';

const routes: Routes = [
  {
    path: 'dashboard',
    component: DashboardPageComponent,
    loadChildren: () => import('../dashboard/dashboard.module').then(m => m.DashboardModule)
  },
  {
    path: 'cursos',
    component: MainPageComponent,
    loadChildren: () => import('../cursos/cursos.module').then(m => m.CursosModule)
  },{
    path: 'chat',
    component: ChatPageComponent,
  }, {
    path: 'hi',
    component: InicioPageComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
