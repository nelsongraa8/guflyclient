import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class DestacadosService {

  constructor( private http : HttpClient ) { }

  getRelevantes() : any {
    return this.http.get( environment.url+'/relevantesmoviedata' ).toPromise();
  }

}
