/* import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Observable,filter } from 'rxjs';
//import 'rxjs/add/operator/filter';
//import { FormsModule, ReactiveFormsModule } from '@angular/forms';


import { Item, ItemService } from './objekt-list.service';


@Component({
  template: `
    <h3 highlight>Items List</h3>
    <div *ngFor='let item of items | async'>
      <a routerLink="{{'../' + item.id}}">{{item.id}} - {{item.name}}</a>
      
  `
})
export class ItemsListComponent {
  item:Item | undefined;
  items1:Item[]=[];
    contactForm!: FormGroup;
    selectedObjekt: Item | undefined;
  items: Observable<Item[]>;
 

  constructor(private itemService: ItemService) {
    this.items = this.itemService.getItems();
  }




  onSubmit() {
    const newItem = this.contactForm.get(JSON.stringify(this.item))!.value;
    this.displayMessage('Saved ' + newItem);
    this.item = newItem;
  }
  saveItem() {
   
    this.displayMessage('New Item');
    this.contactForm.get(JSON.stringify(this.item))!.setValue('');
    //this.item = {id: 0, name: ''};
    this.items.subscribe(array=>array.push(this.item!))
   
  }
  

  deleteObjekt(item: Item) {
    if (window.confirm('Are you sure, you want to delete?')) {
   
    this.items1 = this.items1.filter((h: Item) => h !== item);
    if (this.selectedObjekt === item) {
      this.selectedObjekt = undefined;
    }
  };
}
 


  displayMessage(arg0: string) {
    throw new Error('Method not implemented.');
  }




}
 */

import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

import { Item, ItemService } from './objekt-list.service';

@Component({
  template: `
    <h3 highlight>Items List</h3>
    <div *ngFor='let item of items | async'>
      <a routerLink="{{'../' + item.id}}">{{item.id}} - {{item.name}}</a>
    </div>
  `
})
export class ItemsListComponent {
  items: Observable<Item[]>;

  constructor(private itemService: ItemService) {
    this.items = this.itemService.getItems();
  }

}






 

