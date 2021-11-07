import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AllmovieService {

  constructor( private http : HttpClient ) { }

  getMovies( id_limit_movie:any , max_result:any ) : any {
    return this.http.get( environment.url + '/allmoviedata/' + id_limit_movie + "/" + max_result ).toPromise();
  }

}
