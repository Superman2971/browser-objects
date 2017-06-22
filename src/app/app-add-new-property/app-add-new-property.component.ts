import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';
import { AppBroadcaster } from '../services/app-broadcaster.service';

@Component({
  selector: 'app-add-new-property',
  templateUrl: './app-add-new-property.component.html',
  styleUrls: ['./app-add-new-property.component.scss']
})
export class AppAddNewPropertyComponent implements OnInit {

  window: FirebaseListObservable<any>;

  constructor(
    private ActivatedRoute: ActivatedRoute,
    private db: AngularFireDatabase,
    private AppBroadcaster:AppBroadcaster
  ) {
    this.window = db.list('/window-object');
  }

  ngOnInit() {
    console.log(this.ActivatedRoute.snapshot.data); // passing in data from router
    this.registerSubscribe();
  }

  registerSubscribe() {
    // subscribe for page navigation
    this.AppBroadcaster.on('testing').subscribe(randomInfo => {
      console.log('broadcasted', randomInfo);
    });
  }

  submit(name, type, url, description) {
    let data = {
      type: type,
      example_link: url,
      description: description
    };
    console.log(data);
    this.window.update(name, data);
  }

}
