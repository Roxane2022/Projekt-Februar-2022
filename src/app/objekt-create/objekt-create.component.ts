import { Component, Input, OnInit } from '@angular/core';
import { Objekt } from '../shared/objekt';
import { Objekte } from '../testobjekt';
import { Router } from '@angular/router';
import { RestApiService } from '../shared/rest-api.service';
import { objektklasse } from '../shared/Objektklasse';

@Component({
  selector: 'create Objekt',//'app-objekt-create',
  templateUrl: './objekt-create.component.html',
  styleUrls: ['./objekt-create.component.css']
})
export class ObjektCreateComponent implements OnInit{
  dataObjekt= new objektklasse(1, "Hosenanzug",40, "Kleiderschrank","neu",new Date("2023.02.23"),new Date("2023.02.28"),"Nie getragen","verkaufen","langweilig geworden");
    /* objektDetails:Objekt={
    id: 0,
    name: '',
    groesse: 0,
    lager: '',
    zustand: '',
    verloesungsanfang:new Date(),
    verloesungsende: new Date(),
    kurz_Beschreibung: '',
    art_der_Trennung: '',
    grund_der_Trennung: ''
  }   */
  //constructor(private employ:RestApiService ){}
  constructor(public restApi: RestApiService, public router: Router) {}
   ngOnInit(): void {
   console.log("my App initialisation");
  } 

  //public meinObjekt=Objekte
selectedObjekt?: Objekt;
onSelect(diesesObjekt:Objekt): void {
  this.selectedObjekt = diesesObjekt;
}

onSubmit() {//dataObjekt:Objekt
  console.log(this.dataObjekt);

  //this.employ.createObjekt(this.dataObjekt).subscribe(objekt =>console.log("erfolgreich gespeichert",objekt))
    //this.restApi.createObjekt(this.dataObjekt).subscribe()
    //((data: {}) => {
     // this.router.navigate(['/objekt-list']);
    //});
  }


  
}








