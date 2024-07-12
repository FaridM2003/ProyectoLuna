import { UserCreatorsService } from './../services/user-creators.service';
import { Component } from '@angular/core';
@Component({
  selector: 'app-aboutit',
  standalone: true,
  imports: [],
  templateUrl: './aboutit.component.html',
  styleUrl: './aboutit.component.css'
})



export class AboutitComponent {
  get users() {
    return this.datosUsers.users
  }




  constructor(
    private datosUsers: UserCreatorsService
  ) { }
}
