import { Routes } from '@angular/router';

import { AdminComponent } from './admin/admin/admin.component';
import { HomeComponent } from './Frontend/home/home.component';
import { MenuComponent } from './Frontend/menu/menu.component';




export const routes: Routes = [
    {path:'',component:HomeComponent},
    {path:'admin',component:AdminComponent},
    {path:'menu',component:MenuComponent},
  
];
