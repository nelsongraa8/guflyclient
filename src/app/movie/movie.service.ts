import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class MovieService {

  constructor( private http : HttpClient ) {}

  getSinglerMovies( id_ruta_service : any ) : any {
    return this.http.get( environment.url+'/moviedata/'+id_ruta_service ).toPromise();
  }

}
