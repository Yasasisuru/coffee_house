import { Component, OnInit } from '@angular/core';
import { SharedService } from '../../shared.service';

@Component({
  selector: 'app-bakery',
  standalone: true,
  imports: [],
  templateUrl: './bakery.component.html',
  styleUrl: './bakery.component.css'
})
export class BakeryComponent implements OnInit {
  val1: any;
  val2: any;
  val3: any;
  constructor(private sharedService:SharedService){}

  ngOnInit(){

    this.sharedService.currentValues.subscribe(values =>{
      this.val1=values.val1;
      this.val2=values.val2;
      this.val3=values.val3;
    });
  }
}
