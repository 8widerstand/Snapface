import { Component, OnInit } from '@angular/core';
import {DatePipe, LowerCasePipe, NgClass, NgStyle, TitleCasePipe, UpperCasePipe, DecimalPipe} from '@angular/common';
import {FaceSnapsService} from '../app/service/face-snaps.service';
import {FaceSnap} from '../app/models/face-snap';
import {ActivatedRoute, RouterLink} from '@angular/router';


@Component({
  selector: 'app-single-face-snap',
  imports: [
    NgStyle,
    NgClass,
    TitleCasePipe,
    DatePipe,
    RouterLink
  ],
  templateUrl: './single-face-snap.component.html',
  styleUrl: './single-face-snap.component.scss'
})
export class SingleFaceSnapComponent implements OnInit {


  snapped!:boolean;
  snapButtonText!: string;
  faceSnap!: FaceSnap;

  constructor(private faceSnapService: FaceSnapsService,
              private route: ActivatedRoute,) {}

  ngOnInit(): void {
    this.prepareInterface();
    this.getFaceSnap();
  }


  onSnap(): void {
    if (this.snapped) {
      this.unSnap();
    }
    else {
      this.snap();
    }

  }

  unSnap(): void {
    this.faceSnapService.snapFaceSnapById(this.faceSnap.id, 'unsnap');
    this.snapButtonText="Oh Snap!";
    this.snapped = false;
  }
  snap(): void {
   this.faceSnapService.snapFaceSnapById(this.faceSnap.id, 'snap');
    this.snapButtonText="Oops Unsnap";
    this.snapped = true;
  }

  private prepareInterface(): void {
    this.snapped = false;
    this.snapButtonText = "Oh Snap !";

  }

  private getFaceSnap(){
    const faceSnapId = this.route.snapshot.params['id'];
    this.faceSnap = this.faceSnapService.getFaceSnapById(faceSnapId);
  }

}
