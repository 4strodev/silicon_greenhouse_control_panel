import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sensors-page',
  templateUrl: './sensors-page.component.html',
  styleUrls: ['./sensors-page.component.scss']
})
export class SensorsPageComponent implements OnInit {

  sensors: string[] = [
    'temperatura terra',
    'humitat terra',
    'temperatura aire',
    'humitat aire',
    'llum',
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
