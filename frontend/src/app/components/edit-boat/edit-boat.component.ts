import { Component, OnInit } from '@angular/core';
import { DynamicDialogConfig, DynamicDialogRef } from 'primeng/dynamicdialog';
import { Boat } from 'src/app/model/boat.model';
import { BoatService } from 'src/app/services/boat.service';

@Component({
  selector: 'app-edit-boat',
  templateUrl: './edit-boat.component.html',
  styleUrls: ['./edit-boat.component.scss']
})
export class EditBoatComponent implements OnInit {
  boat: Boat

  constructor(public ref: DynamicDialogRef, public config: DynamicDialogConfig,
    private boatService: BoatService,) { }

  ngOnInit() {
    console.log(this.config.data.boat)
    this.boat = this.config.data.boat
  }

  saveChanges(boat: Boat) {
    console.log(boat)
    this.boatService.updateBoat(boat).subscribe(() => {
      this.ref.close(boat)
    })
  }

}
