import { Component } from '@angular/core';
import { HomeSection1Component } from './home-section1/home-section1.component';
import { HomeSection2Component } from './home-section2/home-section2.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [HomeSection1Component,HomeSection2Component],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

}
