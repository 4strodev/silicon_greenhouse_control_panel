import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EventsPageComponent } from './pages/events-page/events-page.component';
import { SensorPageComponent } from './pages/sensor-page/sensor-page.component';
import { SensorsPageComponent } from './pages/sensors-page/sensors-page.component';

const routes: Routes = [
  { path: 'sensors', component: SensorsPageComponent },
  { path: 'sensors/:id', component: SensorPageComponent },
  { path: 'events', component: EventsPageComponent },
  { path: '**', redirectTo: '', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
