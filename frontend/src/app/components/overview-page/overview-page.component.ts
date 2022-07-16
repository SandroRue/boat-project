import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Boat } from 'src/app/model/boat.model';

@Component({
  selector: 'app-overview-page',
  templateUrl: './overview-page.component.html',
  styleUrls: ['./overview-page.component.scss']
})
export class OverviewPageComponent implements OnInit {

  boats: Boat[] | any;

  constructor(
    private router: Router,
  ) { }

  ngOnInit(): void {

    this.boats = [
      { id: '1', image: 'https://www.pexels.com/photo/photo-of-speed-boat-on-sea-3274984/', name: 'Speeder 1', description: 'max. speed: 50km/h' },
      { id: '2', image: 'https://www.google.com/search?q=speedboat&sxsrf=ALiCzsbe2VqKfhVkziWO0gRdFtUbi1eABA:1657960382799&source=lnms&tbm=isch&sa=X&ved=2ahUKEwiciKzd__z4AhUH_KQKHe0kDi4Q_AUoAXoECAIQAw&biw=1920&bih=973&dpr=1#imgrc=mf5tXSW5kZZBjM', name: 'Speeder 2', description: 'max. speed: 70km/h' },
    ]
    console.log(this.boats)
  }

  createBoat() {
    console.log("Boat created")
  }

  editBoat(boat: Boat) {
    console.log("Boat edited", boat)
    this.router.navigate(['detail-page', boat.id]);
  }

  deleteBoat() {
    console.log("Boat deleted")
  }

}
