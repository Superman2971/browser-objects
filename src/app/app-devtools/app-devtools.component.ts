import { Component, ElementRef, Renderer2 } from '@angular/core';
import { AngularFireDatabase, FirebaseObjectObservable } from 'angularfire2/database';
import { AppBroadcaster } from '../services/app-broadcaster.service';
import { WindowRef } from '../services/app-window-ref.service';

@Component({
  selector: 'app-devtools',
  templateUrl: './app-devtools.component.html',
  styleUrls: ['./app-devtools.component.scss']
})
export class AppDevtoolsComponent {
  mousemoveListener: () => void;
  mouseupListener: () => void;
  filterType = 'All';
  types = ['All', 'Properties', 'Functions', 'Objects'];
  browserObject: FirebaseObjectObservable<any[]>;
  height:number;
  yStart = 0;
  notSetYet = true;
  top = 312;

  constructor(
    private winRef: WindowRef,
    private db: AngularFireDatabase,
    private AppBroadcaster:AppBroadcaster,
    private elem: ElementRef,
    private renderer: Renderer2
  ) {
    console.log(winRef.window);
    this.height = winRef.window.innerHeight - 368;
    this.registerSubscribe();
  }

  registerSubscribe() {
    this.AppBroadcaster.on('selectedObject').subscribe(objectLink => {
      if (objectLink) {
        this.browserObject = this.db.object('' + objectLink);
      } else {
        this.browserObject = undefined;
      }
    });
  }

  changeFilterType(newFilter) {
    this.filterType = newFilter;
  }

  changeHeightStart() {
    this.mousemoveListener = this.renderer.listen('body', 'mousemove', (event: MouseEvent) => {
      if (this.notSetYet) {
        this.yStart = event.clientY;
        this.notSetYet = false;
      }
      this.height = this.winRef.window.innerHeight - 468 - (event.clientY - this.yStart);
      this.top = 412 - (this.yStart - event.clientY);
      this.AppBroadcaster.fire('heightChange', this.top);
    });
    this.mouseupListener = this.renderer.listen('body', 'mouseup', () => {
      this.changeHeightStop();
    });
  }

  changeHeightStop() {
    if (this.mousemoveListener) {
      this.mousemoveListener();
    }
    if (this.mouseupListener) {
      this.mouseupListener()
    }
  }
}
