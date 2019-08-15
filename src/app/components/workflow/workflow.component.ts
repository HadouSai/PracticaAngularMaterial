import { Component, OnInit } from '@angular/core';
import { WorkflowService } from 'src/app/services/workflow.service';

@Component({
  selector: 'app-workflow',
  templateUrl: './workflow.component.html',
  styleUrls: ['./workflow.component.css']
})
export class WorkflowComponent implements OnInit {
  cards = [];
  contenido = false;
  constructor(private workflowS: WorkflowService) { this.cards = this.workflowS.cards; }

  ngOnInit() {
    console.log(this.workflowS.cards);

  }

  // getData() {
  //     this.cards.push(this.workflowS.getData());
  // }

}
