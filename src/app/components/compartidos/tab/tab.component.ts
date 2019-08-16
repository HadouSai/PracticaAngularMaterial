import { Component, OnInit, OnDestroy } from '@angular/core';
import { TabsService } from 'src/app/services/tabs.service';
import { Subscription } from 'rxjs';
import { Card } from 'src/app/interfaces/card';
import { Router } from '@angular/router';

@Component({
  selector: 'app-tab',
  templateUrl: './tab.component.html',
  styleUrls: ['./tab.component.css']
})
export class TabComponent implements OnInit, OnDestroy {

  misTabs: string[] = [];
  private tabs: Subscription;
  constructor(private tabsS: TabsService,
    private router: Router) {
    this.tabs = this.tabsS.tabs.subscribe(c => {
      this.addTabs(c);
    }
    );
  }


  ngOnInit() {
  }

  addTabs(c) {
    this.misTabs.push(c);
    console.log(this.misTabs);
  }
  stageInTab(tab: string) {
    console.log(tab);
    this.router.navigateByUrl(`/${tab}`);
  }
  closeTab(index: string) {
    this.misTabs.splice(Number(index), 1);
    console.log(`/${this.misTabs[Number(index) - 1]}`);

  }

  ngOnDestroy() {
    this.tabs.unsubscribe();
  }
}
