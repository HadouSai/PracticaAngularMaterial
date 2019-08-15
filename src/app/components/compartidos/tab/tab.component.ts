import { Component, OnInit, OnDestroy } from '@angular/core';
import { TabsService } from 'src/app/services/tabs.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-tab',
  templateUrl: './tab.component.html',
  styleUrls: ['./tab.component.css']
})
export class TabComponent implements OnInit, OnDestroy {

  misTabs: string[] = [];
  private tabs: Subscription;
  constructor(private tabsS: TabsService) {
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

  ngOnDestroy() {
    this.tabs.unsubscribe();
  }
}
