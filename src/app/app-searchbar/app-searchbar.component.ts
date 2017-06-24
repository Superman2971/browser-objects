import { Component, ElementRef, Renderer } from '@angular/core';

@Component({
  selector: 'app-searchbar',
  templateUrl: './app-searchbar.component.html',
  styleUrls: ['./app-searchbar.component.scss']
})
export class AppSearchbarComponent {

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
  searchText:string;
  placeholder:string;
  showDropdown = false;

  constructor(public elem: ElementRef, private renderer: Renderer) {
    renderer.listenGlobal("document", "click", (event: any) => {
      if (this.showDropdown && event.target && this.elem.nativeElement !== event.target && !this.elem.nativeElement.contains(event.target)) {
        this.showDropdown = false;
      }
    });
  }

  selectOption = option => {
    this.showDropdown = false;
    this.searchText = '';
    this.placeholder = option.text;
    console.log('this is where we have a ui-state change or send event (send event) to devtools for ', option.text);
  }

}
