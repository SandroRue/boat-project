import { Component, OnInit } from '@angular/core';
import { Boat } from 'src/app/model/boat.model';

@Component({
  selector: 'app-overview-page',
  templateUrl: './overview-page.component.html',
  styleUrls: ['./overview-page.component.scss']
})
export class OverviewPageComponent implements OnInit {

  boats: Boat[] | any;

  constructor() { }

  ngOnInit(): void {

    this.boats = [
      { name: 'Speeder 1', description: 'max. speed: 50km/h' },
      { name: 'Speeder 2', description: 'max. speed: 70km/h' },
    ]

  }

  createBoat() {
    console.log("Boat created")
  }

  editBoat() {
    console.log("Boat edited")
  }

  deleteBoat() {
    console.log("Boat deleted")
  }

}
