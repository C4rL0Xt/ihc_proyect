import { NgModule} from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { UserInfoComponent } from './components/user-info/user-info.component';
import { GradesChartComponent } from './components/grades-chart/grades-chart.component';
import { CourseListComponent } from './components/course-list/course-list.component';
import { CourseCardComponent } from './components/course-card/course-card.component';


@NgModule({
  declarations: [
    HomePageComponent,
    UserInfoComponent,
    GradesChartComponent,
    CourseListComponent,
    CourseCardComponent
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    SharedModule
  ]

})
export class HomeModule { }
