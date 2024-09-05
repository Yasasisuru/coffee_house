import { Component,Input,OnInit } from '@angular/core';
import { SharedService } from '../../shared.service';
import { __values } from 'tslib';


@Component({
  selector: 'app-drinks',
  standalone: true,
  imports: [],
  templateUrl: './drinks.component.html',
  styleUrl: './drinks.component.css'
})
export class DrinksComponent implements OnInit{
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
