import { NgModule} from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';//für Arbeit mit Formulare

import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { Routes, RouterModule } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TestsComponent } from './tests/tests.component';
//import { ContactComponent } from './objekt-create/objekt-create.component';

import { CustomersComponent } from './objekt-kategorie/objekt-kategorie.component';
//import { UserComponent } from './user/user.component';
import{ContactModule} from'./objekt-create/objekt-create.module';
import{ItemsModule}from'./objekt-list/objekt-list.module';




/* const appRoutes: Routes = [
{
    path: '',
    redirectTo: '/dashboard',
    pathMatch: 'full',
    component:  CustomersComponent
},  
{
    path: 'dashboard',
    component:  CustomersComponent
}
];
 */



 
/* 




@NgModule({
  declarations: [
    AppComponent,
    TestsComponent,
   // ContactComponent,
   // ItemsComponent,
    //ObjektListComponent,
    //ObjektKategorieComponent,
    UserComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,//zusammen mit import{FormsModule}from... hinzugefügt
    ReactiveFormsModule,
    HttpClientModule,
    RouterModule,
    
    
  ],
  
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

 */


/* Feature Modules */

import { GreetingModule } from './user/user.module';


@NgModule({
  imports: [
    BrowserModule,
    ContactModule,
    GreetingModule.forRoot({userName: ', Cecile '}),
    AppRoutingModule
  ],
  declarations: [
    AppComponent
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }







