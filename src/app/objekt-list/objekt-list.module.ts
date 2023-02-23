import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ItemsComponent } from './objekt-list.component';
import { ItemsListComponent } from './objekt-list-liste.component';
import { ItemsDetailComponent } from './objekt-list-detail.component';
import { ItemService } from './objekt-list.service';
import { ItemsRoutingModule } from './objekt-list-routing.module';

import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppComponent } from '../app.component';


@NgModule({
  imports:      [ CommonModule, ItemsRoutingModule,  BrowserModule,
    FormsModule,
    ReactiveFormsModule ],
  declarations: [ ItemsComponent, ItemsDetailComponent, ItemsListComponent ],
  bootstrap: [AppComponent],
  providers:    [ ItemService ]

 
})





export class ItemsModule {}
