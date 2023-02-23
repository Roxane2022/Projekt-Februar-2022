import { NgModule } from '@angular/core';
import { SharedModule } from '../shared/shared.module';
import { ReactiveFormsModule } from '@angular/forms';

import { ContactComponent } from './objekt-create.component';
import { ContactService } from './objekt-create.service';
import { ContactRoutingModule } from './objekt-create-routing.module';

@NgModule({
  imports: [
    SharedModule,
    ContactRoutingModule,
    ReactiveFormsModule
  ],
  declarations: [ ContactComponent ],
  providers:    [ ContactService ]
})
export class ContactModule { }