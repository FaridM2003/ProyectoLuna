import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserCreatorsService {
  private _user: users[] = [
    {
      nombre:'farid',
      description:"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Provident quod ad et deserunt aut dign!"
    },
    {
      nombre:'Carlos',
      description:"patata gei",
    },
    {
      nombre:'Jafet',
      description:"Demostrativo",
    },
    {
      nombre:'Citlalli',
      description:"especialita"
    },{
      nombre: "patata",
      description: "juan"
    },{
      nombre: "patata",
      description: "juan"
    }
  ]
private _userActual:string = '';
Poneruser(user:any){
  this._userActual =  user
 }
get users(){
  return [...this._user]
}
get user(){
  return this._userActual
}
constructor() { }
}
class users{
nombre?: string
description?: string

}
