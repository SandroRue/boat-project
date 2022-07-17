import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { DynamicDialogConfig, DynamicDialogRef } from 'primeng/dynamicdialog';
import { Boat } from 'src/app/model/boat.model';
import { BoatService } from 'src/app/services/boat.service';

@Component({
  selector: 'app-create-boat',
  templateUrl: './create-boat.component.html',
  styleUrls: ['./create-boat.component.scss']
})
export class CreateBoatComponent implements OnInit {
  boat: Boat
  boatForm: FormGroup;

  constructor(
    public ref: DynamicDialogRef, public config: DynamicDialogConfig,
    private boatService: BoatService, private fb: FormBuilder
  ) { }

  ngOnInit() {
    this.boatForm = this.fb.group({
      'image': new FormControl('', Validators.required),
      'name': new FormControl('', Validators.required),
      'description': new FormControl('', Validators.required),
    });
  }

  saveBoat(boat: Boat) {
    boat = this.boatForm.value
    console.log(boat)
    this.boatService.createBoat(boat).subscribe(() => {
      this.ref.close(boat)
    })
  }

}
