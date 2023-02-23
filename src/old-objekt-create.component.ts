// import { Component, Input, OnInit } from '@angular/core';
// import { Objekt } from '../shared/objekt';
// import { Objekte } from '../testobjekt';
// import { Router } from '@angular/router';
// import { RestApiService } from '../shared/rest-api.service';
// import { objektklasse } from '../shared/Objektklasse';
// import { ItemsComponent } from '../objekt-list/objekt-list.component';



// @Component({
//   selector: 'app-objekt-create',
//   templateUrl: './objekt-create.component.html',
//   styleUrls: ['./objekt-create.component.css']
// })
// export class ObjektCreateComponent implements OnInit{
//   @Input()
//   objekt!: Objekt;
//   dataObjekt= new objektklasse(1, "Hosenanzug",40, "Kleiderschrank","neu",new Date("2023.02.23"),new Date("2023.02.28"),"Nie getragen","verkaufen","langweilig geworden");
//   meineListe=new ItemsComponent( );
//   //this.restApi);  
//   /* objektDetails:Objekt={
//     id: 0,
//     name: '',
//     groesse: 0,
//     lager: '',
//     zustand: '',
//     verloesungsanfang:new Date(),
//     verloesungsende: new Date(),
//     kurz_Beschreibung: '',
//     art_der_Trennung: '',
//     grund_der_Trennung: ''
//   }   */
//   //constructor(private employ:RestApiService ){}
//   constructor(public restApi: RestApiService, public router: Router) {}
//    ngOnInit(): void {
//    console.log("my App initialisation");
//   } 

//   //public meinObjekt=Objekte
// //selectedObjekt?: Objekt;
// /* onSelect(diesesObjekt:Objekt): void {
//   this.selectedObjekt = diesesObjekt;
// } */

// onSubmit() {
//   //dataObjekt:Objekt;
  
//  // console.log(this.dataObjekt);

//   this.restApi.createObjekt(this.dataObjekt).subscribe(objekt =>console.log("erfolgreich gespeichert",objekt))
//      /* this.restApi.createObjekt(this.dataObjekt).subscribe
//     ((data: {}) => {
//       this.router.navigate(['/objekt-list']);
//     }); 
//     this.meineListe.save(); */
//   }
// // export class ObjektListComponent implements OnInit {


//   thismyobjekt=new Object();
// objekte: any = [];

// addingObjekt = false;

//  selectedObjekt: any;
// //objekt: Objekt | undefined;
// //selectedObjekt:Objekt;
// addingHero: any;
// objektDetails: any;
//   // constructor(public restApi: RestApiService) {}
//   /* ngOnInit() {
//     this.loadObjekte();
//   } */
//   // Get Objects list
//   loadObjekte() {
//     return this.restApi.getObjekte().subscribe((objekte: {}) => {
//       this.objekte = objekte;

    
//     });

    
//   }
  
//   // Delete object
//   deleteObjekt(objekt: Objekt) {
//     if (window.confirm('Are you sure, you want to delete?')) {
//       /* this.restApi.deleteObjekt(objekt).subscribe((data) => {
//         this.loadObjekte();
//       });
//     }*/
   
  

//   this.restApi.deleteObjekt(objekt).subscribe(_res => {
//     this.objekte = this.objekte.filter((h: Objekt) => h !== objekt);
//     if (this.selectedObjekt === objekt) {
//       this.selectedObjekt = null;
//     }
//   });
// }
// }
//     cancel() {
//   this.addingObjekt = false;
//   this.selectedObjekt = null;
// }
// enableAddMode() {
//   this.addingObjekt = true;
//   this.selectedObjekt = this.objekt;
// }
// onSelect(objekt: Objekt) {
//   this.addingObjekt = false;
//   this.selectedObjekt = objekt;
// }

// save() {
//     if (this.addingObjekt) {
//       this.restApi.createObjekt(this.selectedObjekt).subscribe(
//        (objekt: Objekt) => {
//         this.addingObjekt = false;
//         this.selectedObjekt = null;
//         this.objekte.push(objekt);
//       });
      
//     } else {
//       this.restApi.updateObjekt(this.selectedObjekt.id, this.selectedObjekt).subscribe((_objekt: Objekt) => {
//         this.addingObjekt = false;
//         this.selectedObjekt = null;
//       });
//     }
//   }

//   }