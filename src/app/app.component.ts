import { Component } from '@angular/core';
import { ActivatedRoute, RouterLink, RouterOutlet, Routes } from '@angular/router';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {MatToolbarModule} from '@angular/material/toolbar';
import { HomeComponent } from './components/home/home.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,
    MatToolbarModule,
    MatButtonModule,
      MatIconModule,
    HomeComponent,
    RouterLink],

  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'ProyectoLuna';
  constructor(private route: ActivatedRoute) { }
 interfaz:any;
  ngOnInit(): void {
    this.route.params.subscribe(params => {
      console.log(params['']);
      this.interfaz = params[''];
    });
  }

}
