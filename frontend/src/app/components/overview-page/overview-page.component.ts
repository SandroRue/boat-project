import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Boat } from 'src/app/model/boat.model';
import { BoatService } from 'src/app/services/boat.service';
import { DialogService, DynamicDialogRef } from 'primeng/dynamicdialog';
import { ConfirmationService, MessageService } from 'primeng/api';
import { CreateBoatComponent } from '../create-boat/create-boat.component';

@Component({
  selector: 'app-overview-page',
  templateUrl: './overview-page.component.html',
  styleUrls: ['./overview-page.component.scss'],
  providers: [DialogService, ConfirmationService, MessageService]
})
export class OverviewPageComponent implements OnInit {

  boats: Boat[]
  boats$: Observable<Boat[]>
  ref: DynamicDialogRef

  constructor(
    private router: Router,
    private boatService: BoatService,
    public dialogService: DialogService,
    private confirmationService: ConfirmationService,
    private messageService: MessageService,
  ) { }

  ngOnInit() {
    console.log(this.boats)
    this.getAllBoats()
  }

  getAllBoats() {
    this.boats$ = this.boatService.getAllBoats()
  }

  createBoat() {
    const ref = this.dialogService.open(CreateBoatComponent, {
      header: 'Add a new boat',
      width: '50%',
      height: '70%'
    });
    ref.onClose.subscribe((boat: Boat) => {
      this.getAllBoats()
    });
    console.log("Boat created")
  }

  viewBoat(boat: Boat) {
    console.log("Boat edited", boat)
    this.router.navigate(['detail-page', boat.id]);
  }

  deleteBoat() {
    console.log("Boat deleted")
  }

}
