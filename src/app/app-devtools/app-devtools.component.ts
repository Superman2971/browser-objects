import { Component, OnInit } from '@angular/core';
import { WindowRef } from '../services/app-window-ref.service';

@Component({
  selector: 'app-devtools',
  templateUrl: './app-devtools.component.html',
  styleUrls: ['./app-devtools.component.scss']
})
export class AppDevtoolsComponent implements OnInit {

  filterType = 'All';
  types = ['All', 'Properties', 'Functions', 'Other?'];
  browserObject:any;
  fakeObject:any = {
    window: {
      name: 'window',
      JSON3: {
        propertyType: 'object',
        length: 4,
        name: 'JSON3',
        noConflict: {
          propertyType: 'function',
          arguments: 'null',
          caller: 'null',
          length: 0,
          name: 'noConflict',
          prototype: 'object'
        },
        parse: {
          propertyType: 'function',
          arguments: 'null',
          caller: 'null',
          length: 2,
          name: 'parse',
          prototype: 'object'
        },
        runInContext: {
          propertyType: 'function',
          arguments: 'null',
          caller: 'null',
          length: 2,
          name: 'runInContext',
          prototype: 'object'
        },
        stringify: {
          propertyType: 'function',
          arguments: 'null',
          caller: 'null',
          length: 3,
          name: 'stringify'
        }
      },
      Zone: {
        propertyType: 'function',
        length: 2,
        name: 'Zone',
        assertZonePatched: {
          propertyType: 'function',
          arguments: 'null',
          caller: 'null',
          length: 3,
          name: 'stringify'
        },
        current: {},
        currentTask: {},
        root: {},
        __load_patch: {
          propertyType: 'function',
          arguments: 'null',
          caller: 'null',
          length: 3,
          name: 'stringify'
        },
        __symbol: {
          propertyType: 'function',
          arguments: 'null',
          caller: 'null',
          length: 3,
          name: 'stringify'
        },
        __zone_symbol__rejectionHandledHandler: {
          propertyType: 'function',
          arguments: 'null',
          caller: 'null',
          length: 3,
          name: 'stringify'
        },
        __zone_symbol__unhandledPromiseRejectionHandler: {
          propertyType: 'function',
          arguments: 'null',
          caller: 'null',
          length: 3,
          name: 'stringify'
        }
      }
    }
  };

  constructor(private winRef: WindowRef) {
    console.log(winRef.window);
  }

  ngOnInit() {
    setTimeout( () => {
      this.browserObject = this.fakeObject;
    }, 2000);
  }

}
