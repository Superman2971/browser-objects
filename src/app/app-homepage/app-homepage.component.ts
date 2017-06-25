import { Component, Input } from '@angular/core';
import { AppBroadcaster } from '../services/app-broadcaster.service';

@Component({
  selector: 'app-homepage',
  templateUrl: './app-homepage.component.html',
  styleUrls: ['./app-homepage.component.scss']
})
export class AppHomepageComponent {
  propertyName:any;
  propertyDetails:any;
  @Input() set details(details:any) {
    if (details) {
      this.propertyName = details.key
      this.propertyDetails = details.value;
    } else {
      this.propertyName = false;
      this.propertyDetails = false;
    }
  }
}
