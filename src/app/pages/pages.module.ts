import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { RouterModule } from '@angular/router';
import { SensorsPageComponent } from './sensors-page/sensors-page.component';
import { EventsPageComponent } from './events-page/events-page.component';
import { SensorPageComponent } from './sensor-page/sensor-page.component';



@NgModule({
  declarations: [
    HomeComponent,
    SensorsPageComponent,
    EventsPageComponent,
    SensorPageComponent
  ],
  imports: [
    CommonModule,
    RouterModule
  ]
})
export class PagesModule { }
