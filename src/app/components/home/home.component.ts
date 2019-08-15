import { Component, OnInit, OnDestroy } from '@angular/core';
import { Card } from 'src/app/interfaces/card';
import { WorkflowService } from 'src/app/services/workflow.service';
import { Router } from '@angular/router';
import { NavbarService } from 'src/app/services/navbar.service';
import { TabsService } from 'src/app/services/tabs.service';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit, OnDestroy {
  menuHamburger = true;
  cards = [];
  constructor(private workflowS: WorkflowService,
              private router: Router,
              private navbarS: NavbarService,
              private tabsS: TabsService) { }

  ngOnInit() {
    this.cards = this.workflowS.data;
    console.log(this.cards);
    this.navbarS.showMenuHamburger(true);
    this.navbarS.cambio.next(true);
  }
  ngOnDestroy() {
    this.navbarS.cambio.next(false);
  }
  showMore(dataCard: Card) {
    console.log(dataCard);
    this.workflowS.saveCards(dataCard);
    this.router.navigate(['workflow']);
  }
  abrirTap() {
    this.tabsS.tabs.next('Hola');
  }


}
