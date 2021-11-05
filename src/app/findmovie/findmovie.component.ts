import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FindmovieService } from './findmovie.service'

@Component({
  selector: 'app-findmovie',
  templateUrl: './findmovie.component.html',
  styleUrls: ['./findmovie.component.css']
})
export class FindmovieComponent implements OnInit {

  allmoviesearch:any = [];
  name_movie_route:any

  constructor(
    private name_router_activate: ActivatedRoute,
    private findsearchmovie: FindmovieService
  ) { }

  ngOnInit(): void {

    this.name_movie_route = this.name_router_activate.snapshot.params.name_search_movie;

    this.findsearchmovie.getMovieSearch( this.name_movie_route )
    .then(
      ( data_search_movie:any) => {
        this.allmoviesearch = data_search_movie;
      }
    );

  }

}
