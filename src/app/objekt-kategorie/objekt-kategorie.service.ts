import { Injectable, OnDestroy } from '@angular/core';

import { Observable, of } from 'rxjs';
import { delay } from 'rxjs/operators';
import { Item } from '../objekt-list/objekt-list.service';

export class Customer {
  constructor(public id: number, public name: string,public items:string[]) { }
}


const CUSTOMERS: Customer[] = [
  new Customer(1, 'Erwachsene Bekleidung:',["HosenAnzug-Rot","Damenbluse","Jumpsuit"] ),
  new Customer(2, 'Kinder Bekleidung:',["Hose","Pullover"]),
  new Customer(3, 'Schuhe:', ["Pump","sneaker"]),
  new Customer(4, 'Küchenzubehör:',["Tellergarnitur"] ),
 
];

const FETCH_LATENCY = 500;

/** Simulate a data service that retrieves heroes from a server */
@Injectable()
export class CustomersService implements OnDestroy {

  constructor() { console.log('CustomersService instance created.'); }
  ngOnDestroy() { console.log('CustomersService instance destroyed.'); }

  getCustomers(): Observable<Customer[]>  {
    return of(CUSTOMERS).pipe(delay(FETCH_LATENCY));
  }

  getCustomer(id: number | string): Observable<Customer> {
    const customer$ = of(CUSTOMERS.find(customer => customer.id === +id)!);
    return customer$.pipe(delay(FETCH_LATENCY));
  }
}
