import { NgModule } from '@angular/core';
import { Routes,
         RouterModule } from '@angular/router';

import { CustomersComponent } from './objekt-kategorie.component';
import { CustomersListComponent } from './objekt-kategorie-list.component';
import { CustomersDetailComponent } from './objekt-kategorie-detail.component';

const routes: Routes = [
  { path: '',
    component: CustomersComponent,
    children: [
      { path: '',    component: CustomersListComponent },
      { path: ':id', component: CustomersDetailComponent }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CustomersRoutingModule {}