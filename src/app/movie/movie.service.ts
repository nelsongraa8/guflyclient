import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class MovieService {

  constructor( private http : HttpClient ) {}

  getSinglerMovies( id_ruta_service : any ) : any {
    console.log(id_ruta_service)
    
    return this.http
    .get( environment.url+'/single/movie/'+id_ruta_service )
    .toPromise();
  }

  getDataMovieAPI( getDataMovieAPI : any ) : any {
    return this.http
    .get( 'https://api.themoviedb.org/3/movie/'+getDataMovieAPI+'?api_key=834059cb24bc11be719c241a12f537f4' )
    .toPromise();
  }

}
