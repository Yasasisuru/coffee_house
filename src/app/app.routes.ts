import { Component } from '@angular/core';
import { Routes } from '@angular/router';
import { RewardsComponent } from './Frontend/rewards/rewards.component';



export const routes: Routes = [
    {path:'',title:'Home',loadComponent:()=> import('./Frontend/home/home.component').then(c=>c.HomeComponent)},
    {path:'admin',title:'Admin',loadComponent:()=> import('./admin/admin/admin.component').then(c=>c.AdminComponent)},
    {path:'menu',title:'menu',loadComponent:()=> import('./Frontend/menu/menu.component').then(c=>c.MenuComponent)},
     {path:'Rewards',title:'Rewards',loadComponent:()=> import('./Frontend/rewards/rewards.component').then(c=>c.RewardsComponent)},
    {path:'cart',title:'cart',loadComponent:()=> import('./Frontend/cart/cart.component').then(c=>c.CartComponent)},
    {path:'menu',children:[
        {path:'pizza',title:'pizza',loadComponent:()=> import('./Frontend/pizza/pizza.component').then(c=>c.PizzaComponent)},
        {path:'drinks',title:'drinks',loadComponent:()=> import('./Frontend/drinks/drinks.component').then(c=>c.DrinksComponent)},
        {path:'food',title:'food',loadComponent:()=> import('./Frontend/foods/foods.component').then(c=>c.FoodsComponent)},
        {path:'bakery',title:'bakery',loadComponent:()=> import('./Frontend/bakery/bakery.component').then(c=>c.BakeryComponent)}
       
       ]},
    {path:'admin',children:[
        {path:'dashboard',title:'Admin dashboard',loadComponent:()=> import('./admin/dashboard/dashboard.component').then(c=>c.DashboardComponent)},
       ]},


  
];

