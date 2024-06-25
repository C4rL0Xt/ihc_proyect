import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CursoprofesorRoutingModule } from './cursoprofesor-routing.module';
import { ProfesorPageComponent } from './pages/profesor-page/profesor-page.component';
import { CursosProfesorComponent } from './componentes/cursos-profesor/cursos-profesor.component';
import { DetalleProfesorComponent } from './componentes/detalle-profesor/detalle-profesor.component';

import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatSelectModule } from '@angular/material/select';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatChipsModule } from '@angular/material/chips';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatDialogModule } from '@angular/material/dialog';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatTabsModule } from '@angular/material/tabs';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { ServicioProfesorService } from './services/servicio-profesor.service';

@NgModule({
  declarations: [
    ProfesorPageComponent,
    CursosProfesorComponent,
    DetalleProfesorComponent,

  ],
  imports: [
    CommonModule,
    CursoprofesorRoutingModule,
    MatToolbarModule,
    MatButtonModule,
    MatIconModule,
    MatSidenavModule,
    MatListModule,
    MatCardModule,
    MatFormFieldModule,
    MatInputModule,
    MatGridListModule,
    MatSelectModule,
    MatExpansionModule,
    MatCheckboxModule,
    MatChipsModule,
    MatProgressBarModule,
    MatDialogModule,
    MatTooltipModule,
    MatTabsModule,
    MatSnackBarModule,
    MatDatepickerModule,
    MatNativeDateModule
  ],
  providers: [ServicioProfesorService]
})
export class CursoprofesorModule { }
