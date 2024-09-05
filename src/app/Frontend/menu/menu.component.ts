
import { Component,OnInit } from '@angular/core';
import { FormsModule, NgModel } from '@angular/forms';
import { RouterLink } from '@angular/router';
import { SharedService } from '../../shared.service';




@Component({
  selector: 'app-menu',
  standalone: true,
  imports: [RouterLink,FormsModule],
  templateUrl: './menu.component.html',
  styleUrl: './menu.component.css'
})
export class MenuComponent {

constructor (private sharedService:SharedService){
  sharedService.setValues('', '', '');
}

chaitea(){
  this.sharedService.setValues('chai tea','$5.9','assets/img/drinks/chai tea.jpg');  // name price url
}

coldcoffee(){
  this.sharedService.setValues('cold coffee','$5.9','assets/img/drinks/cold coffee.jpg');
}
coldmilk(){
  this.sharedService.setValues('cold milk','$5.9','assets/img/drinks/cold milk.png');
}
hotchocolate(){
  this.sharedService.setValues('hot chocolate','$5.9','assets/img/drinks/hot chocolate.jpg');
}
hotcofees(){
  this.sharedService.setValues('hot cofees','$5.9','assets/img/drinks/hot cofees.jpg');
}
hottea(){
  this.sharedService.setValues('hot tea','$5.9','assets/img/drinks/hot tea.jpg');
}
lemonade(){
  this.sharedService.setValues('ice tea with lemonade','$5.9','assets/img/drinks/ice tea with lemonade.jpg');
}
steamedmilk(){
  this.sharedService.setValues('steamed milk','$5.9','assets/img/drinks/steamed milk.jpg');
}
cheeseburger(){
  this.sharedService.setValues('cheeseburger-roller','$5.9','assets/img/hot food/cheeseburger-roller.jpg');
}
Big_Bite(){
  this.sharedService.setValues('Big_Bite','$5.9','assets/img/hot food/Big_Bite.png');
}
cheeseburger1(){
  this.sharedService.setValues('cheeseburger','$5.9','assets/img/hot food/cheeseburger.jpg');
}
ChickenSandwich(){
  this.sharedService.setValues('Chicken_Sandwich','$5.9','assets/img/hot food/Chicken Sandwich.png');
}
CheesyBBQmeatballs(){
  this.sharedService.setValues('Chicken_Sandwich','$5.9','assets/img/hot food/Chicken Sandwich.png');
}
saussageeggcheesecroissant(){
  this.sharedService.setValues('saussage egg cheese croissant','$5.9','assets/img/hot food/saussage-egg-cheese-croissant.jpg');
}
spicygarlicchickenroller(){
  this.sharedService.setValues('spicy garlic chicken roller','$5.9','assets/img/hot food/spicy_garlic_chicken_roller.png');
}
meatpizza(){
  this.sharedService.setValues('7-meat-pizza','$5.9','assets/img/pizza/7-meat-pizza.jpg');
}
blackchicken(){
  this.sharedService.setValues('black chicken','$5.9','assets/img/pizza/black chicken.jpg');
}
breakfastpizza(){
  this.sharedService.setValues('breakfast-pizza','$5.9','assets/img/pizza/breakfast-pizza.jpg');
}

CheesePizza(){
  this.sharedService.setValues('Cheese_Pizza','$5.9','assets/img/pizza/Cheese_Pizza.jpg');
}
Pizzabuddy(){
  this.sharedService.setValues('Pizza buddy','$5.9','assets/img/pizza/Pizza.jpg');
}
tandoorichicken(){
  this.sharedService.setValues('tandoori chicken','$5.9','assets/img/pizza/tandoori chicken.jpg');
}
brookie(){
  this.sharedService.setValues('tandoori chicken','$5.9','assets/img/bakery/brookie.jpg');
}
brownie(){
  this.sharedService.setValues('brownie ','$5.9','assets/img/bakery/brownie.jpg');
}
BluberrychocolateMuffins(){
  this.sharedService.setValues('Bluberry chocolate Muffins','$5.9','assets/img/bakery/chocolate Muffins.png');
}
Donut(){
  this.sharedService.setValues('Donut','$5.9','assets/img/bakery/Donut.png');
}
brownie1(){
  this.sharedService.setValues('brownie','$5.9','assets/img/bakery/brownie.jpg');
}
BluberryMuffin(){
  this.sharedService.setValues('Bluberry Muffin','$5.9','assets/img/bakery/BluberryMuffin.png');
}

}
 