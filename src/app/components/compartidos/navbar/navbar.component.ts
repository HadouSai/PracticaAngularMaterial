import { Component, OnInit, OnDestroy } from '@angular/core';
import { NavbarService } from 'src/app/services/navbar.service';
import { Subscription } from 'rxjs';
import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit, OnDestroy {

  menuHamburger = true;

  private sub: Subscription;
  constructor(private navbarS: NavbarService) {
    this.sub = this.navbarS.cambio.subscribe(c => this.fnHasALgo(c));
  }

  ngOnInit() {
  }

  fnHasALgo(c: boolean) {
    this.menuHamburger = c;
    console.log(this.menuHamburger);
  }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }



}
