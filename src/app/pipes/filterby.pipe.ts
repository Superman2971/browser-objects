import { Pipe, Injectable } from '@angular/core';

@Pipe({
  name: 'filterBy',
  pure: false
})

@Injectable()
export class FilterPipe {

  private filterStrings(filter) {
    if (filter) {
      filter = filter.toLowerCase();
    }
    return value => {
      return value ? value.toLowerCase().indexOf(filter) !== -1 : false;
    }
  }

  private filterObjects(filter, property) {
    if (filter) {
      filter = filter.toLowerCase();
    }
    return value => {
      return value ? value[property].toLowerCase().indexOf(filter) !== -1 : false;
    }
  }

  transform(array: any[], filter: any, property: any): any {
    if (!array || !filter) {
      return array;
    } else if (property) {
      return array.filter(this.filterObjects(filter, property));
    } else {
      return array.filter(this.filterStrings(filter));
    }
  }
}