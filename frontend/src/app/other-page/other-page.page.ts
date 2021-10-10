import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { Plane } from '../models/plane';
import { planesService } from '../services/planes.service';

@Component({
  selector: 'app-other-page',
  templateUrl: './other-page.page.html',
  styleUrls: ['./other-page.page.scss'],
})
export class OtherPagePage implements OnInit {
  public planes: Array<Plane> = [];
  id: any;
  updatePlaneFg: FormGroup;
  constructor(private router: Router, private planesService: planesService) {}
   

  ngOnInit() {
    this.loadInfo();
  }



  loadInfo(){
    this.planesService.getPlanes().subscribe((p: Array<Plane>) => {
      this.planes = p;
    });
  }

  goBack(){
    this.router.navigateByUrl("/home");
  }
  addAnotherPlane(){
    console.log("addAnotherPlane")
    const plane: Plane = { id: 0, name: "peperonilla", year: 1976 };
    this.planesService.createPlane(plane).subscribe(() => {
      this.loadInfo();
    });
  }

  addAnotherPlaneUsingJSON(){
    console.log("addAnotherPlaneUsingJSON")
    const plane: Plane = { id: 0, name: "peperonilla", year: 1976 };
    this.planesService.createPlaneUsingJSON(plane).subscribe(() => {
      this.loadInfo();
    });
  }

  deletePlane(idPlane: number){
    this.planesService.deletePlane(idPlane).subscribe(() => {
      this.loadInfo();
    });
  }

}
