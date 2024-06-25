import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CalendarRoutingModule } from './calendar-routing.module';
import { CalendarPageComponent } from './page/calendar-page/calendar-page.component';


@NgModule({
  declarations: [
    CalendarPageComponent
  ],
  imports: [
    CommonModule,
  ]
})
export class CalendarModule { }
