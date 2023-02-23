// Exact copy except import UserService from greeting
import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';

import {UserService} from '../user/user.service';
import{ContactModule}from'./objekt-create.module';
import {Contact, ContactService} from './objekt-create.service';
//import { Item, ItemService } from '..objekt-list/objekt-list.service';

@Component({
  selector: 'app-contact',
  templateUrl: './objekt-create.component.html',
  styleUrls: ['./objekt-create.component.css']
})
export class ContactComponent implements OnInit {
  contact!: Contact;
  contacts: Contact[] = [];

  msg = 'Loading slogans ...';
  userName = '';

  contactForm: FormGroup;

  constructor(
      private contactService: ContactService, userService: UserService, private fb: FormBuilder) {
    this.contactForm = this.fb.group({name: ['', Validators.required]});
    this.userName = userService.userName;
  } 
/*   constructor(
    private contactService: ContactService, item: Item, private fb: FormBuilder) {
  this.contactForm = this.fb.group({name: ['', Validators.required]});
  this.name = item.name;
}
 */
  ngOnInit() {
    this.setupForm();
  }

  setupForm() {
    this.contactService.getContacts().subscribe(contacts => {
      this.msg = '';
      this.contacts = contacts;
      this.contact = contacts[0];
      this.contactForm.get('name')!.setValue(this.contact.name);
    });
  }

  next() {
    let ix = 1 + this.contacts.indexOf(this.contact);
    if (ix >= this.contacts.length) {
      ix = 0;
    }
    this.contact = this.contacts[ix];
    console.log(this.contacts[ix]);
  }

  onSubmit() {
    const newName = this.contactForm.get('name')!.value;
    this.displayMessage('Saved ' + newName);
    this.contact.name = newName;
  }

  newContact() {
    this.displayMessage('New Motivation');
    this.contactForm.get('name')!.setValue('');
    this.contact = {id: 42, name: ''};
    this.contacts.push(this.contact);
  }

  /** Display a message briefly, then remove it. */
  displayMessage(msg: string) {
    this.msg = msg;
    setTimeout(() => this.msg = '', 1500);
  }
}




  


  

  
  

 