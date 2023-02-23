import { Injectable, OnDestroy } from '@angular/core';

import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import { Observable, of } from 'rxjs';
import { delay } from 'rxjs/operators';

export class Item {
  constructor(
    public id: number,
     public name: string,  
    public groesse: number,
    public lager: string,
    public zustand: string,
   public  verlosungsanfang: Date,
    public verlosungsende: Date,
   public kurz_Beschreibung: string,
    public art_der_Trennung: string,
   public grund_der_Trennung: string) { }
}
contactForm: FormGroup;


var ITEMS: Item[] = 
[

  new Item(
           1,
           "Hosenanzug",
           40,
           "Garderobe",
           "neu",
          new Date("24.02.2023"),
          new Date("28.02.2023"),
          "Wurde nur einmal getragen.",
         "verkaufen",
          "zu eng geworden"
  ), new Item(
          2,
           "Jumpsuit",
           42,
           "Garderobe",
          "neu",
          new Date("24.02.2023"),
          new Date("28.02.2023"),
          "Wurde zweinmal getragen.",
          "verkaufen",
          "zu eng geworden"
  ),
      new Item(
          1,
         "Rock",
           40,
          "Garderobe",
          "nicht neu",
         new Date("24.02.2023"),
          new Date("28.02.2023"),
        "sehr oft getragen.",
        "verschenken",
          "langweilig geworden"
      )
  ];



const FETCH_LATENCY = 500;

/** Simulate a data service that retrieves items from a server */
@Injectable()
export class ItemService implements OnDestroy {
  contactForm: any;
  contact: any;
  //restApi: any;

  constructor() { console.log('ItemService instance created.'); }
  ngOnDestroy() { console.log('ItemService instance destroyed.'); }

  getItems(): Observable<Item[]>  {
    return of(ITEMS).pipe(delay(FETCH_LATENCY));
  }

  getItem(id: number | string): Observable<Item> {
    const item$ = of(ITEMS.find(item => item.id === +id)!);
    return item$.pipe(delay(FETCH_LATENCY));
  }


  
  selectedObjekt!: Item | null;
item= new Item(0,"",0,"","",new Date(""),new Date(""),"","","");
items: Item[] = [];
msg = 'Loading contacts ...';
/* setupForm() {
  this.getItems().subscribe(items => {
    this.msg = '';
    this.items = items;
    this.item = items[0];
    this.contactForm.get(this.item)!.setValue(this.item);
  });
} */
  /* onSubmit() {
    const newItem = this.contactForm.get(Item)!.value;
    this.displayMessage('Saved ' + newItem);
    this.item = newItem;
  } */
  /* saveItem() {
    this.displayMessage('New Item');
    this.contactForm.get(this.item)!.setValue('');
    //this.item = {id: 0, name: ''};
    this.items.push(this.item);
  } */

  /* next() {
    let ix = 1 + this.items.indexOf(this.item);
    if (ix >= this.items.length) {
      ix = 0;
    }
    this.item = this.items[ix];
    console.log(this.items[ix]);
  } */

   /*deleteObjekt(item: Item) {
    if (window.confirm('Are you sure, you want to delete?')) {
    this.restApi.deleteObjekt(item).subscribe((Response: Item) => {
    this.items = this.items.filter((h: Item) => h !== item);
    if (this.selectedObjekt === item) {
      this.selectedObjekt = null;
    }
  });
}
  }*/ 

  /* deleteObjekt(item: Item) {
    if (window.confirm('Are you sure, you want to delete?')) {
   
    this.items = this.items.filter((h: Item) => h !== item);
    if (this.selectedObjekt === item) {
      this.selectedObjekt = null;
    }
  };
}
   */
/*   displayMessage(arg0: string) {
    throw new Error('Method not implemented.');
  }
 */

}




  


  

  
  

 

