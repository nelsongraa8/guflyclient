import { Component, OnInit } from '@angular/core';
import { AllmovieService } from './allmovie.service';

@Component({
  selector: 'app-allmovies',
  templateUrl: './allmovies.component.html',
  styleUrls: ['./allmovies.component.css']
})
export class AllmoviesComponent implements OnInit {

  allmovies:string[];
  id_limit:any = 1;
  max_result:any = 16;

  constructor(
    private allmovieService: AllmovieService
  ) { }

  ngOnInit(): void {

    this.getLimitMovies();

  }

  getLimitMovies() {
    this.allmovieService.getMovies( this.id_limit , this.max_result ).then(
      ( data_allmovie:any ) => {
        this.allmovies = data_allmovie;
        for (const iterator of data_allmovie) {
          this.id_limit = iterator.id
        }
      }
    )
  }

}
