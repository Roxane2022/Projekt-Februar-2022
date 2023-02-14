import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';//für Arbeit mit Formulare

import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TestsComponent } from './tests/tests.component';
import { ObjektCreateComponent } from './objekt-create/objekt-create.component';
import { ObjektEditComponent } from './objekt-edit/objekt-edit.component';
import { ObjektListComponent } from './objekt-list/objekt-list.component';
import { ObjektKategorieComponent } from './objekt-kategorie/objekt-kategorie.component';

@NgModule({
  declarations: [
    AppComponent,
    TestsComponent,
    ObjektCreateComponent,
    ObjektEditComponent,
    ObjektListComponent,
    ObjektKategorieComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,//zusammen mit import{FormsModule}from... hinzugefügt
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }








