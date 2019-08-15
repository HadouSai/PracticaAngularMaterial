import { Component, OnInit } from '@angular/core';
import { Card } from 'src/app/interfaces/card';
import { WorkflowService } from 'src/app/services/workflow.service';
import { Router } from '@angular/router';
import { NavbarService } from 'src/app/services/navbar.service';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  cards = [];
  hamburgerMenu = true;
  constructor(private workflowS: WorkflowService,
              private router: Router,
              private navbarS: NavbarService) { }

  ngOnInit() {
    this.cards = this.workflowS.data;
    console.log(this.cards);
    this.hamburgerMenu = true;
    // this.navbarS.showMenuHamburger(this.hamburgerMenu);
  }

  showMore(dataCard: Card) {
    console.log(dataCard);
    this.workflowS.saveCards(dataCard);
    this.router.navigate(['workflow']);
  }


}
