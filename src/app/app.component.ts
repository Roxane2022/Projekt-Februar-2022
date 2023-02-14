import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Get-Rid-Of-It';
    //x:number = Math.random();
    x=Math.floor(Math.random() * 10)+1;
   y:number=7;
   z=this.x*this.y;
    
   
   
    summe= function(a:number,b:number):number{
    
   let z= a+b;
   return z;
   }
   multipliziere=function(a:number,b:number):number{
    let z = a*b;
    return z;
   }

   dividiere=function(a:number,b:number):number{
    let z = a/b;
    return z;
   }
   
}
