import { Component } from '@angular/core';
import {MatIconModule} from '@angular/material/icon';
import {NgbConfig} from '@ng-bootstrap/ng-bootstrap';
 @Component({
  selector: 'app-home-section1',
  standalone: true,
  imports: [MatIconModule],
  templateUrl: './home-section1.component.html',
  styleUrl: './home-section1.component.css'
})
export class HomeSection1Component {
  constructor(ngbConfig: NgbConfig) {
    ngbConfig.animation = false;
  }
}
