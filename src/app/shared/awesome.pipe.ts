import { Pipe, PipeTransform } from '@angular/core';

@Pipe({ name: '' })
/** Precede the input string with the word "Awesome " */
export class AwesomePipe implements PipeTransform {
  transform(phrase: string) {
    return phrase ? ' ' + phrase : '';
  }
}
