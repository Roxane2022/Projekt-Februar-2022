import { Component, OnInit } from '@angular/core';
import { RestApiService } from '../shared/rest-api.service';
@Component({
  selector: 'app-objekt-list',
  templateUrl: './objekt-list.component.html',
  styleUrls: ['./objekt-list.component.css'],
})
export class ObjektListComponent implements OnInit {
Objekt: any = [];
  constructor(public restApi: RestApiService) {}
  ngOnInit() {
    this.loadObjekte();
  }
  // Get Objects list
  loadObjekte() {
    return this.restApi.getObjekte().subscribe((data: {}) => {
      this.Objekt = data;
    });
  }
  
  // Delete object
  deleteObjekt(id: any) {
    if (window.confirm('Are you sure, you want to delete?')) {
      this.restApi.deleteObjekt(id).subscribe((data) => {
        this.loadObjekte();
      });
    }
  }
}