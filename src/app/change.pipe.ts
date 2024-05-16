import { Pipe, PipeTransform } from '@angular/core';
import { DemographicComponent } from './demographic/demographic.component';

@Pipe({
  name: 'change',
  standalone: true
})
export class ChangePipe implements PipeTransform {
  text? : DemographicComponent;

  transform(value: string): string {
    if (!value) {
      return '';
    }

    let result = '';

    for (let i = 0; i < value.length; i++) {
      const char = value.charAt(i);
      if (char >= 'a' && char <= 'z') {
        result += String.fromCharCode('z'.charCodeAt(0) - char.charCodeAt(0) + 'a'.charCodeAt(0));
      } else if (char >= 'A' && char <= 'Z') {
        result += String.fromCharCode('Z'.charCodeAt(0) - char.charCodeAt(0) + 'A'.charCodeAt(0));
      } else {
        result += char;
      }
    }

    return result;
  }
  
}
