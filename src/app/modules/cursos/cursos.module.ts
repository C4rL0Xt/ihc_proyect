import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { CursosRoutingModule } from './cursos-routing.module';
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
import { CursosPageComponent } from './page/cursos-page/cursos-page.component';
import { FormsModule } from '@angular/forms';
import { DetalleCursoComponent } from './componentes/detalle-curso/detalle-curso.component';
import { MainPageComponent } from './page/main-page/main-page.component';
import { CoursesServiceService } from './servicios/courses-service.service';
import { BibliotecaComponent } from './componentes/biblioteca/biblioteca.component';
import { DetalleCursoProfesorComponent } from './componentes/detalle-curso-profesor/detalle-curso-profesor.component';
import { CrearSemanaComponent } from './componentes/crear-semana/crear-semana.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    CursosPageComponent,
    DetalleCursoComponent,
    MainPageComponent,
    BibliotecaComponent,
    DetalleCursoProfesorComponent,
    CrearSemanaComponent,

  ],
  imports: [
    CommonModule,
    RouterModule,
    FormsModule,
    CursosRoutingModule,
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
    MatNativeDateModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [CoursesServiceService]
})
export class CursosModule { }
