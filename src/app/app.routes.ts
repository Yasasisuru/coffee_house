import { Component } from '@angular/core';
import { Routes } from '@angular/router';








export const routes: Routes = [
    {path:'',title:'Home',loadComponent:()=> import('./Frontend/home/home.component').then(c=>c.HomeComponent)},
    {path:'admin',title:'Admin',loadComponent:()=> import('./admin/admin/admin.component').then(c=>c.AdminComponent)},
    {path:'menu',title:'menu',loadComponent:()=> import('./Frontend/menu/menu.component').then(c=>c.MenuComponent)},
    {path:'menu',children:[
        {path:'pizza',title:'pizza',loadComponent:()=> import('./Frontend/pizza/pizza.component').then(c=>c.PizzaComponent)},
       
       ]},

       {path:'dashboard',title:'Admin dashboard',loadComponent:()=> import('./admin/dashboard/dashboard.component').then(c=>c.DashboardComponent)},
  
];
