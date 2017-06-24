import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'properties'
})

export class PropertiesPipe implements PipeTransform {
  transform(value, args:string[]) : any {
    let properties = [];
    for (let key in value) {
      properties.push({key: key, value: value[key]});
    }
    console.log(properties);
    return properties;
  }
}