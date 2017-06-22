import { Component } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './app-navbar.component.html',
  styleUrls: ['./app-navbar.component.scss']
})
export class AppNavbarComponent {
  showAbout = false;
  notInAbout = true;

  closeAbout() {
    this.notInAbout = true;
    setTimeout( () => {
      if (this.notInAbout) {
        this.showAbout = false;
      }
    }, 300);
  }
}
