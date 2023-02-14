import { Component, Input, OnInit } from '@angular/core';
import { Objekt } from '../shared/objekt';
import { Objekte } from '../testobjekt';
import { Router } from '@angular/router';
import { RestApiService } from '../shared/rest-api.service';

@Component({
  selector: 'app-objekt-create',
  templateUrl: './objekt-create.component.html',
  styleUrls: ['./objekt-create.component.css']
})
export class ObjektCreateComponent implements OnInit{
  
  @Input() objektDetails:Objekt={
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
  }
  constructor(public restApi: RestApiService, public router: Router) {}
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }

  public meinObjekt=Objekte
selectedObjekt?: Objekt;
onSelect(diesesObjekt:Objekt): void {
  this.selectedObjekt = diesesObjekt;
}

 addObjekt(dataObjekt: any) {
    this.restApi.createObjekt(this.objektDetails).subscribe((data: {}) => {
      this.router.navigate(['/objekt-list']);
    });
  }


  
}








