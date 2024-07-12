import { AboutitComponent } from './components/aboutit/aboutit.component';
import { HomeComponent } from './components/home/home.component';
import { Routes, RouterLink } from '@angular/router';


export const routes: Routes = [
  {path:"", component: HomeComponent},
  {path:"about", component: AboutitComponent},
];
