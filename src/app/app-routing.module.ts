import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ObjektCreateComponent } from './objekt-create/objekt-create.component';
import { ObjektEditComponent } from './objekt-edit/objekt-edit.component';
import { ObjektListComponent } from './objekt-list/objekt-list.component';
import { ObjektKategorieComponent } from './objekt-kategorie/objekt-kategorie.component';
const routes: Routes = [
   { path: '', pathMatch: 'full', redirectTo: 'objekt-create' },
  { path: 'objekt-create', component: ObjektCreateComponent },
  { path: 'objekt-list', component: ObjektListComponent },
  { path: 'objekt-edit/:id', component: ObjektEditComponent },
  { path: 'objekt-kategorie/:id', component: ObjektKategorieComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }



