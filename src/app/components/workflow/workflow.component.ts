import { Component, OnInit } from '@angular/core';
import { WorkflowService } from 'src/app/services/workflow.service';
import { NavbarService } from 'src/app/services/navbar.service';

@Component({
  selector: 'app-workflow',
  templateUrl: './workflow.component.html',
  styleUrls: ['./workflow.component.css']
})
export class WorkflowComponent implements OnInit {
  cards = [];
  contenido = false;
  constructor(private workflowS: WorkflowService,
              private navbarS: NavbarService) { this.cards = this.workflowS.cards; }

  ngOnInit() {
    console.log(this.workflowS.cards);
    this.navbarS.showMenuHamburger(false);
  }

  // getData() {
  //     this.cards.push(this.workflowS.getData());
  // }

}
