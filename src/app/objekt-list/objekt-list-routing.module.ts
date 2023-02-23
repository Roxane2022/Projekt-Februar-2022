import { NgModule } from '@angular/core';
import { Routes,
         RouterModule } from '@angular/router';

import { ItemsListComponent } from './objekt-list-liste.component';
import { ItemsDetailComponent } from './objekt-list-detail.component';

const routes: Routes = [
  { path: 'list', redirectTo: 'list', pathMatch: 'full'},
  { path: 'list',    component: ItemsListComponent },
  { path: ':id', component: ItemsDetailComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ItemsRoutingModule {}