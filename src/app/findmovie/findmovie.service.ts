import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class FindmovieService {

  constructor( private http: HttpClient ) { }

  getMovieSearch( name_movie:any ): any {
    console.log(name_movie)

    return this.http
      .get( environment.url + '/searchdata/' + name_movie )
      .toPromise();
  }
}
