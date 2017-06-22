import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-homepage',
  templateUrl: './app-homepage.component.html',
  styleUrls: ['./app-homepage.component.scss']
})
export class AppHomepageComponent implements OnInit {

  objects = [{
    text: 'window',
    progress: 'in progress'
  }, {
    text: 'document',
    progress: 'coming soon'
  }, {
    text: 'navigation',
    progress: 'coming soon'
  }, {
    text: 'mouse event',
    progress: 'coming soon'
  }, {
    text: 'input event',
    progress: 'last updated n/ev/er'
  }];

  constructor() { }

  ngOnInit() {
  }

}
