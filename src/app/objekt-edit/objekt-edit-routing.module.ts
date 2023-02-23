import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import {  ObjektEditComponent  } from './objekt-edit.component';

const routes = [
  { path: 'edit', component:  ObjektEditComponent }
];

@NgModule({
  imports: [ RouterModule.forChild(routes) ],
  exports: [ RouterModule ]
})
export class ContactRoutingModule {}