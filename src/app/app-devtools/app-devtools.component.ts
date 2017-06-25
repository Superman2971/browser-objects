import { Component } from '@angular/core';
import { AngularFireDatabase, FirebaseListObservable, FirebaseObjectObservable } from 'angularfire2/database';
import { AppBroadcaster } from '../services/app-broadcaster.service';
import { WindowRef } from '../services/app-window-ref.service';

@Component({
  selector: 'app-devtools',
  templateUrl: './app-devtools.component.html',
  styleUrls: ['./app-devtools.component.scss']
})
export class AppDevtoolsComponent {

  filterType = 'All';
  types = ['All', 'Properties', 'Functions', 'Other?'];
  browserObject: FirebaseListObservable<any[]>;

  constructor(
    private winRef: WindowRef,
    private db: AngularFireDatabase,
    private AppBroadcaster:AppBroadcaster
  ) {
    console.log(winRef.window);
    this.registerSubscribe();
  }

  registerSubscribe() {
    // subscribe for page navigation
    this.AppBroadcaster.on('selectedObject').subscribe(objectLink => {
      if (objectLink) {
        this.browserObject = this.db.list('' + objectLink);
      } else {
        this.browserObject = undefined;
      }
    });
  }
}
