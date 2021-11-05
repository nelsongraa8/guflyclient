import { Component, OnInit } from '@angular/core';
import { LastmoviesService } from './lastmovies.service'

@Component({
  selector: 'app-lastmovies',
  templateUrl: './lastmovies.component.html',
  styleUrls: ['./lastmovies.component.css']
})
export class LastmoviesComponent implements OnInit {

  lastmovies:any;

  constructor(
    private lastmoviesService: LastmoviesService
  ) { }

  ngOnInit(): void {

    this.lastmoviesService.getLastMovies().then(
      ( lastmovies_data:any ) => {
        this.lastmovies = lastmovies_data
      }
    )

  }

}
