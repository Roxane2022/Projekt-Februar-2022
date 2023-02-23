import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Item } from './objekt-list.service';


@Component({
    template: `
      <h3 highlight>Item Detail</h3>
      
      <div>Item id: {{myitem.id}}</div>
      <div>Item Name: {{myitem.name}}</div>
      <div>Item Size: {{myitem.groesse}}</div>
      <div>Item Location: {{myitem.lager}}</div>
      <div>Item state: {{myitem.zustand}}</div>
      <div>Raffle begins at: {{myitem.verlosungsanfang}}</div>
      <div>Raffle ends at: {{myitem.verlosungsende}}</div>
      <div>Item Description: {{myitem.kurz_Beschreibung}}</div>
      <div> next Action:{{myitem.art_der_Trennung}}</div>
      <div>Reason of seperation: {{myitem.grund_der_Trennung}}</div>
      <br>
      <a routerLink="../list">Items List</a>
    `
  })
  export class ItemsDetailComponent implements OnInit {
    myitem=new Item(1,"",0,"","",new Date(""),new Date(""),"","","");
    id = 0;
    name="";
    groesse=0;
    lager="";
    zustand="";
    verlosungsanfang= new Date("");
    verlosungsende= new Date("");
    kurz_Beschreibung="";
    art_der_Trennung="";
    grund_der_Trennung="";
    
    constructor(private route: ActivatedRoute) { }
  
    ngOnInit() {
      this.id = parseInt(this.route.snapshot.paramMap.get('myitem.id')!, 10);
     //this.name=this.myitem.name;

    }




  }
  