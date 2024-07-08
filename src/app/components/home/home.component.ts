import { Component } from '@angular/core';
import { HomeSection1Component } from './home-section1/home-section1.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [HomeSection1Component],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

}
