import { Component } from '@angular/core';

@Component({
  selector: 'app-aboutit',
  standalone: true,
  imports: [],
  templateUrl: './aboutit.component.html',
  styleUrl: './aboutit.component.css'
})
export class AboutitComponent {
  trabajadores:string[] = [
    'test',
    'test',
    'test',
    'tester'
  ]
}
