import { Component, OnInit } from '@angular/core';
import { Boat } from 'src/app/model/boat.model';

@Component({
  selector: 'app-detail-page',
  templateUrl: './detail-page.component.html',
  styleUrls: ['./detail-page.component.scss']
})
export class DetailPageComponent implements OnInit {

  boat: Boat | undefined;

  constructor() { }

  ngOnInit(): void {
    console.log(this.boat)
  }

}
