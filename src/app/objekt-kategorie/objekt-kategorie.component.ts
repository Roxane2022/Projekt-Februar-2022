// import { Component } from '@angular/core';
// import { FormBuilder, FormArray, Validators, FormGroup } from '@angular/forms';
// import { Objekt } from '../shared/objekt';

// @Component({
//   selector: 'app-objekt-kategorie',
//   templateUrl: './objekt-kategorie.component.html',
//   styleUrls: ['./objekt-kategorie.component.css']
// })
// export class ObjektKategorieComponent {


// /* deletekategorie(_t12: number) {
// throw new Error('Method not implemented.');
// }
// addkategorie() {
// throw new Error('Method not implemented.');
// } */
// //form: FormGroup<any>;
//   objekte: Objekt[] = [];
//   form!: FormGroup<any>;



// }
// /* @Component({
//   selector: 'form-array-example',
//   templateUrl: 'form-array-example.component.html',
//   styleUrls: ['form-array-example.component.scss']
// }) */
// export class FormArrayExampleComponent {

//     form = this.fb.group({
//        // ... other form controls ...
//         objekte: this.fb.array([])
//     });

//     constructor(private fb:FormBuilder) {}
  
//     get objekte() {
//       return this.form.controls["objekte"] as FormArray;
//     }

//     addkategorie() {
//       const objektForm = this.fb.group({
//         title: ['', Validators.required],
//         level: ['beginner', Validators.required]
//       });
//       this.objekte.push(objektForm);
//     }

//     deletekategorie(objektIndex: number) {
//       this.objekte.removeAt(objektIndex);
//     }
// }

import { Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CustomersService } from './objekt-kategorie.service';
import { UserService } from '../user/user.service';
import{CustomersRoutingModule}from'./objekt-kategorie-routing.module';
// @Component({
//   selector: 'app-objekt-kategorie',
//   templateUrl: './objekt-kategorie.component.html',
//   styleUrls: ['./objekt-kategorie.component.css']
// })
@Component({
  template: `
    <h2> </h2>
    <router-outlet></router-outlet>
  `,
  providers: [ UserService ]
})
export class CustomersComponent {
  userName = '';
  constructor(userService: UserService) {
    this.userName = userService.userName;
  }
}

