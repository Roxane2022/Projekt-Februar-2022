import { Component } from '@angular/core';
import { TESTS } from '../mock-tests';

import { Tests } from './Tests';
@Component({
  selector: 'app-tests',
  templateUrl: './tests.component.html',
  styleUrls: ['./tests.component.css']
})
export class TestsComponent {
  held:Tests = {
    id: 1,
    name: 'Batman',
    superpower: 'schlau, stark, clever, VIIIEL GELD'
  }
  //Hie die Onselect Methode
public meinTests=TESTS
selectedHeld?: Tests;
onSelect(held:Tests): void {
  this.selectedHeld = held;
}
}


