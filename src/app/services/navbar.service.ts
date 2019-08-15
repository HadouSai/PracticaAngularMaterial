import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NavbarService {

  menuHamburger = true;
  cambio = new Subject<boolean>();
  constructor() { }


  showMenuHamburger(estado: boolean) {
    this.menuHamburger = estado;
  }



}
