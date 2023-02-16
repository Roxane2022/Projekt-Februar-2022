import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Objekt } from './shared/objekt';



@Injectable({
  providedIn: 'root'
})

export class ObjekthandlingserviceService {
url=""
  constructor(private http: HttpClient) {  }

  addkategorie(KategorieName:string){

    this.http.post<any>(this.url,KategorieName)
  }
}
