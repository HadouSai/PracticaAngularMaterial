import { Component, OnInit, OnDestroy } from '@angular/core';
import { Card } from 'src/app/interfaces/card';
import { WorkflowService } from 'src/app/services/workflow.service';
import { Router } from '@angular/router';
import { NavbarService } from 'src/app/services/navbar.service';
import { TabsService } from 'src/app/services/tabs.service';

@Component({
  selector: 'app-modulos',
  templateUrl: './modulos.component.html',
  styleUrls: ['./modulos.component.css']
})
export class ModulosComponent implements OnInit, OnDestroy {
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
    // this.router.navigate(['workflow']);
  }
  abrirTap(card: string, idcard: string, componentName: string) {
    const miniCard = {
      cardTitle: card,
      cardId: idcard,
      component: componentName
    };
    this.tabsS.tabs.next(miniCard);
    this.router.navigateByUrl(`/${componentName}`);
  }


}