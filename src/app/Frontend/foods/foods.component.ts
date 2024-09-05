import { Component, OnInit } from '@angular/core';
import { SharedService } from '../../shared.service';

@Component({
  selector: 'app-foods',
  standalone: true,
  imports: [],
  templateUrl: './foods.component.html',
  styleUrl: './foods.component.css'
})
export class FoodsComponent implements OnInit {
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
