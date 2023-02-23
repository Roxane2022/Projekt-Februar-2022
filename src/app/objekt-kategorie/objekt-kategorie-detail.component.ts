import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { Customer,CustomersService } from './objekt-kategorie.service';

@Component({
  template: `
    <h3 highlight>Kategorie Detail</h3>
    <div *ngIf="customer">
      <div>Id: {{customer.id}}</div><br>
      <div>Name: {{customer.name}}</div><br>
      <div>Items: {{customer.items}}</div><br>
      <div>
      <label>Name:
        
        <input [(ngModel)]="customer.name">
      </label>
      </div>
      <div>
      <label>add Items {{customer.name}}-kategorie:
        
        <input [(ngModel)]="customer.items">
      </label>
      </div>
    </div>
    <br>
    <a routerLink="../">Liste der Kategorien</a>
  `
})
export class CustomersDetailComponent implements OnInit {
  customer!: Customer;

  constructor(
    private route: ActivatedRoute,
    private customersService: CustomersService) { }

  ngOnInit() {
    const id = parseInt(this.route.snapshot.paramMap.get('id')!, 10);
    this.customersService.getCustomer(id).subscribe(customer => this.customer = customer);
  }
}
