import { Objekt } from "./objekt";


export class objektklasse implements Objekt{
    constructor(
    id:any,
    name:any,
    groesse:any,
    lager:any,
    zustand:any,
    verloesungsanfang:any,
    verloesungsende:any,
    kurz_Beschreibung:any,
    art_der_Trennung:any,
    grund_der_Trennung:any){

 
  
 }
    id!: number;
    name!: string;
    groesse!: number;
    lager!: string;
    zustand!: string;
    verloesungsanfang!: Date;
    verloesungsende!: Date;
    kurz_Beschreibung!: string;
    art_der_Trennung!: string;
    grund_der_Trennung!: string;
}
