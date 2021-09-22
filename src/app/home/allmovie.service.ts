import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AllmovieService {

  constructor( private http : HttpClient ) { }

  getMovies() : any {
    return this.http.get('http://localhost:8000/allmoviedata').toPromise();
  }

}
