import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormGroup, FormsModule ,FormControl, FormBuilder, ReactiveFormsModule, Validators} from '@angular/forms';
import { Router } from 'express';



@Component({
  selector: 'app-admin',
  standalone: true,
  imports: [FormsModule,CommonModule,ReactiveFormsModule],
  templateUrl: './admin.component.html',
  styleUrl: './admin.component.css'
})
export class AdminComponent {
 

}
