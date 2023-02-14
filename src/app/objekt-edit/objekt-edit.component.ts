import { Component, OnInit } from '@angular/core';
import { RestApiService } from "../shared/rest-api.service";
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-objekt-edit',
  templateUrl: './objekt-edit.component.html',
  styleUrls: ['./objekt-edit.component.css']
})
export class ObjektEditComponent implements OnInit {
  

  id = this.actRoute.snapshot.params['id'];
  objektData: any = {};
  constructor(
    public restApi: RestApiService,
    public actRoute: ActivatedRoute,
    public router: Router
  ) { 
  }
  ngOnInit() { 
    this.restApi.getObjekt(this.id).subscribe((data: {}) => {
      this.objektData = data;
    })
  }
  // Update objekt data
  updateObjekt() {
    if(window.confirm('Are you sure, you want to update?')){
      this.restApi.updateObjekt(this.id, this.objektData).subscribe(data => {
        this.router.navigate(['/objekte-list'])
      })
    }
  }
}
