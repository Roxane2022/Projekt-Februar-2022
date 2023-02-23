import { Component, OnInit } from '@angular/core';
import { RestApiService } from '../shared/rest-api.service';
import { Objekt } from '../shared/objekt';
import { Objekte } from '../testobjekt';
@Component({
  selector: 'app-objekt-list',
  templateUrl: './objekt-list.component.html',
  styleUrls: ['./objekt-list.component.css'],
})
export class ObjektListComponent implements OnInit {
  [x: string]: any;
  //this.getObjekte();


 // thismyobjekt=new Objekt();
objekte: any = [];

addingObjekt = false;

 selectedObjekt: any;
objekt: Objekt | undefined;
//selectedObjekt:Objekt;
//addingObjekt: any;
objektDetails: any;
  constructor(public restApi: RestApiService) {}
  ngOnInit() {
    this.loadObjekte();
  }
  // Get Objects list
  loadObjekte() {
    return this.restApi.getObjekte().subscribe((objekte: {}) => {
      this.objekte = objekte;

    
    });

    
  }
 /*  getObjekte(): void {
    this.objekte = this.RestApi.getObjekte();
  } */
  
  // Delete object
  deleteObjekt(objekt: Objekt) {
    if (window.confirm('Are you sure, you want to delete?')) {
      /* this.restApi.deleteObjekt(objekt).subscribe((data) => {
        this.loadObjekte();
      });
    }*/
   
  

  this.restApi.deleteObjekt(objekt).subscribe(_res => {
    this.objekte = this.objekte.filter((h: Objekt) => h !== objekt);
    if (this.selectedObjekt === objekt) {
      this.selectedObjekt = null;
    }
  });
}
}
    cancel() {
  this.addingObjekt = false;
  this.selectedObjekt = null;
}
enableAddMode() {
  this.addingObjekt = true;
  this.selectedObjekt = this.objekt;
}
onSelect(objekt: Objekt) {
  this.addingObjekt = false;
  this.selectedObjekt = objekt;
}
//wenn das Objekt noch nicht vorhanden ist wird es erzeugt und sofort danach in der Liste gespeichert 
save() {
  
    if (this.addingObjekt) {
      this.restApi.createObjekt(this.selectedObjekt).subscribe(
       (objekt) => {
        this.addingObjekt = false;
        this.selectedObjekt = null;
        this.objekte.push(objekt);
      });
      
    } else {
      this.restApi.updateObjekt(this.selectedObjekt.id, this.selectedObjekt).subscribe((objekt) => {
        this.addingObjekt = false;
        this.selectedObjekt = null;
      });
    }
  }

  }






  


  

  
  

 