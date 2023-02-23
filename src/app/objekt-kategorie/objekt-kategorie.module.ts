import { NgModule } from '@angular/core';

import { SharedModule } from '../shared/shared.module';
import { RouterModule } from '@angular/router';
import { CustomersComponent } from './objekt-kategorie.component';
import { CustomersDetailComponent } from './objekt-kategorie-detail.component';
import { CustomersListComponent } from './objekt-kategorie-list.component';
import { CustomersRoutingModule } from './objekt-kategorie-routing.module';
import { CustomersService } from './objekt-kategorie.service';


@NgModule({
  imports: [ SharedModule, CustomersRoutingModule, RouterModule,],
  declarations: [
    CustomersComponent, CustomersDetailComponent, CustomersListComponent,
  ],
  providers: [CustomersService]
})
export class CustomersModule { }
