import { Component, OnInit } from '@angular/core';
import { Validators, FormControl, FormGroup, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { Plane } from '../models/plane';
import { planesService } from '../services/planes.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {
 
  public planesForm: FormGroup;
  public planes: Array<Plane> = [];
  public myPlane: Plane;
  planeForm: FormGroup;
  constructor(private router: Router,private planesService: planesService, public formBuilder:FormBuilder) {
    this.planeForm = this.formBuilder.group({
      name:[''],
      year:['']
    })
}

  ngOnInit(): void {
 
  }
  onSubmit(){
    if (!this.planeForm.valid){
      return false;
    } else {
      this.planesService.createPlane(this.planeForm.value).subscribe((response)=>{
        this.planeForm.reset();
      })
    }
  }
  loadInfo(){
    this.planesService.getPlanes().subscribe((p: Array<Plane>) => {
      this.planes = p;
    });
  }


  goToOtherPage(){
    this.router.navigateByUrl("/other-page");
  }

  

  deletePlane(idPlane: number){
    this.planesService.deletePlane(idPlane).subscribe(() => {
      this.loadInfo();
    });
  }
}
