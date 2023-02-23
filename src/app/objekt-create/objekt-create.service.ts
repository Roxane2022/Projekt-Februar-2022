import { Injectable, OnDestroy } from '@angular/core';

import { Observable, of } from 'rxjs';
import { delay } from 'rxjs/operators';

export class Contact {
  constructor(public id: number, public name: string) { }
}
// Motivations Texts für die
const CONTACTS: Contact[] = [
  new Contact(21, 'Motivation1: 1200€ for a Trip'),
  new Contact(22, ' Earn 500€ '),
  new Contact(23, 'Make space for new Items')
];

const FETCH_LATENCY = 500;

/** Simulate a data service that retrieves Texts from a server */
@Injectable()
export class ContactService implements OnDestroy {

  constructor() { console.log('ContactService instance created.'); }
  ngOnDestroy() { console.log('ContactService instance destroyed.'); }

  getContacts(): Observable<Contact[]>  {
    return of(CONTACTS).pipe(delay(FETCH_LATENCY));
  }

  getContact(id: number | string): Observable<Contact> {
    const contact$ = of(CONTACTS.find(contact => contact.id === +id)!);
    return contact$.pipe(delay(FETCH_LATENCY));
  }
}

