import { Component, OnInit } from '@angular/core';
import { AngularFireDatabase, FirebaseListObservable, FirebaseObjectObservable } from 'angularfire2/database';
import { AppBroadcaster } from '../services/app-broadcaster.service';

@Component({
  selector: 'app-window-object',
  templateUrl: './app-window-object.component.html',
  styleUrls: ['./app-window-object.component.scss']
})
export class AppWindowObjectComponent implements OnInit {

  items: FirebaseListObservable<any[]>;
  tests: FirebaseObjectObservable<any>;
  window: FirebaseListObservable<any>;

  addToList(newItem: any) {
    this.items.push(newItem);
  }

  constructor(
    db: AngularFireDatabase,
    private AppBroadcaster:AppBroadcaster
  ) {
    this.items = db.list('/items');
    this.tests = db.object('/thing');
    this.window = db.list('/window-object');
  }

  ngOnInit() {
  }

  sendInfo() {
    this.AppBroadcaster.fire('testing', 'this random info');
  }

}
