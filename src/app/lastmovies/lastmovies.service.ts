import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class LastmoviesService {

  constructor( private http : HttpClient ) { }

  getLastMovies() :any {
    return this.http.get( environment.url+'/lastmoviedata' ).toPromise();
  }
}
