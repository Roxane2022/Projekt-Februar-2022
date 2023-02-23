import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContactComponent } from './objekt-create/objekt-create.component';
import { ObjektEditComponent } from './objekt-edit/objekt-edit.component';
import { ItemsComponent } from './objekt-list/objekt-list.component';
import {CustomersComponent } from './objekt-kategorie/objekt-kategorie.component';


export const routes: Routes = [
   { path: '', pathMatch: 'full', redirectTo: '' },
  { path: 'objekt-create', component: ContactComponent },
  { path: 'objekt-list', component: ItemsComponent },
  { path: 'objekt-edit/:id', component: ObjektEditComponent },
  { path: 'objekt-kategorie/:id', component: CustomersComponent },
  { path: '', redirectTo: 'contact', pathMatch: 'full'},
  { path: 'items', loadChildren: () => import('./objekt-list/objekt-list.module').then(m => m.ItemsModule) },
  { path: 'customers', loadChildren: () => import('./objekt-kategorie/objekt-kategorie.module').then(m => m.CustomersModule) }
];



@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})


export class AppRoutingModule { }








