import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable, tap } from 'rxjs';
import { Boat } from 'src/app/model/boat.model';
import { BoatService } from 'src/app/services/boat.service';

@Component({
  selector: 'app-detail-page',
  templateUrl: './detail-page.component.html',
  styleUrls: ['./detail-page.component.scss']
})
export class DetailPageComponent implements OnInit {
  boat$: Observable<Boat>
  boat: Boat;

  constructor(private route: ActivatedRoute, private boatService: BoatService) { }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.boat$ = this.boatService.getBoat(params.id).pipe(tap(boat => {
        console.log(boat)
      }))
    })
    
  }

}
