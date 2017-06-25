import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-object-tier',
  templateUrl: './app-object-tier.component.html',
  styleUrls: ['./app-object-tier.component.scss']
})
export class AppObjectTierComponent {
  @Input() tier;
}
