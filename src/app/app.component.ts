import { Component,OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

/* @Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
 */



@Component({
  selector: 'app-root',
  template: `
    <app-user></app-user>
    <nav>
      <div><a routerLink="contact" routerLinkActive="active" ariaCurrentWhenActive="page">Motivation</a></div>
     <div> <a routerLink="items" routerLinkActive="active" ariaCurrentWhenActive="page">Items</a></div>
      <div><a routerLink="customers" routerLinkActive="active" ariaCurrentWhenActive="page">Categories</a></div>
    </nav>
    <router-outlet></router-outlet>
  `,
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  [x: string]: any;
}

