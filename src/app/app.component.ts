import { Component } from '@angular/core';
import { RouterLink, RouterOutlet, Routes } from '@angular/router';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {MatToolbarModule} from '@angular/material/toolbar';
import { HomeComponent } from './components/home/home.component';
import { TabdivComponent } from './components/tabdiv/tabdiv.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,
    MatToolbarModule,
    MatButtonModule,
      MatIconModule,
    HomeComponent,
    RouterLink,
  TabdivComponent],

  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'ProyectoLuna';

  items = [
    'texto',
    'texto1',
    'text'
  ]
}
