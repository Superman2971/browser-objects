import { Component, OnInit } from '@angular/core';
import { AngularFireDatabase, FirebaseListObservable, FirebaseObjectObservable } from 'angularfire2/database';

@Component({
  selector: 'app-window-object',
  templateUrl: './app-window-object.component.html',
  styleUrls: ['./app-window-object.component.scss']
})
export class AppWindowObjectComponent implements OnInit {

  items: FirebaseListObservable<any[]>;
  tests: FirebaseObjectObservable<any>;

  addToList(newItem: any) {
    this.items.push(newItem);
  }

  constructor(db: AngularFireDatabase) {
    this.items = db.list('/items');
    this.tests = db.object('/thing');
  }

  ngOnInit() {
  }

}
