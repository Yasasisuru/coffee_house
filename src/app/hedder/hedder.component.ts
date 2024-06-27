import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-hedder',
  standalone: true,
  imports: [RouterLink,RouterLinkActive ],
  templateUrl: './hedder.component.html',
  styleUrl: './hedder.component.css'
})
export class HedderComponent {

}
