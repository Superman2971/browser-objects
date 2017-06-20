import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';

@Component({
  selector: 'app-add-new-property',
  templateUrl: './app-add-new-property.component.html',
  styleUrls: ['./app-add-new-property.component.scss']
})
export class AppAddNewPropertyComponent implements OnInit {

  window: FirebaseListObservable<any>;

  constructor(
    private ActivatedRoute: ActivatedRoute,
    private db: AngularFireDatabase
  ) {
    this.window = db.list('/window-object');
  }

  ngOnInit() {
    console.log(this.ActivatedRoute.snapshot.data); // passing in data from router
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
