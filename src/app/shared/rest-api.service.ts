

import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Objekt } from '../shared/objekt';
import { Observable, throwError } from 'rxjs';
import { retry, catchError } from 'rxjs/operators';
@Injectable({
  providedIn: 'root',
})
export class RestApiService {
 /*  addObjekt(selectedObjekt: any) {
    throw new Error('Method not implemented.');
  }
   */
  // Define API
  apiURL = 'http://localhost:4200';
  RestApiService: any;
  objekte: any;
  // private api5='http://getridofit.com/create-objekt'
  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.getObjekte();
  }
  //this.objekte = this.RestApiService.getObjekte();

  /*========================================
    CRUD Methods for consuming RESTful API
  =========================================*/
  // Http Options
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
    }),
  };
  // HttpClient API get() method => Fetch objekte list
   getObjekte(): Observable<Objekt> {
    return this.http
      .get<Objekt>(this.apiURL + '/objekte')
      .pipe(retry(1), catchError(this.handleError)); 
  }
  /* getObjekte(): void {
    this.RestApiService.getObjekte()
        .subscribe((objekte: any) => this.objekte = objekte);
  } */

  // HttpClient API get() method => Fetch objekt
  getObjekt(id: any): Observable<Objekt> {
    return this.http
      .get<Objekt>(this.apiURL + id)
      .pipe(retry(1), catchError(this.handleError));
  }
  // HttpClient API post() method => Create objekt
   createObjekt(objekt: any): Observable<Objekt> {
    return this.http
      .post<Objekt>(
        this.apiURL +'/',
        JSON.stringify(objekt),
       //objekt,
        this.httpOptions
      )
      //.pipe(retry(1), catchError(this.handleError));
  } 
/*  createObjekt(objekt:Objekt):Observable<Objekt>{
  return this.http.post<Objekt>(this.apiURL,objekt)
    //,this.httpOptions)
 // .pipe(retry(1), catchError(this.handleError));
 } */
 
  // HttpClient API put() method => Update objekt
  updateObjekt(id: any, objekt: Objekt): Observable<Objekt> {
    return this.http
      .put<Objekt>(
        this.apiURL + '/objekt/' + id,
      //  JSON.stringify(objekt),
      objekt,
        this.httpOptions
      )
      .pipe(retry(1), catchError(this.handleError));
  }
  // HttpClient API delete() method => Delete objekt
  deleteObjekt(id: any) {
    return this.http
      .delete<Objekt>(this.apiURL + '/objekte/' + id, this.httpOptions)
      .pipe(retry(1), catchError(this.handleError));
  }
  // Error handling
  handleError(error: any) {
    let errorMessage = '';
    if (error.error instanceof ErrorEvent) {
      // Get client-side error
      errorMessage = error.error.message;
    } else {
      // Get server-side error
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    window.alert(errorMessage);
    return throwError(() => {
      return errorMessage;
    });
  }
}