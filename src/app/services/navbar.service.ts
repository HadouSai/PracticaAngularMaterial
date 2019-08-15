import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class NavbarService {

  menuHamburger = true;
  constructor() { }


  showMenuHamburger(estado: boolean) {
    this.menuHamburger = estado;
  }


}
