import { Component, OnInit } from '@angular/core';
import { AllmovieService } from './allmovie.service';

@Component({
  selector: 'app-allmovies',
  templateUrl: './allmovies.component.html',
  styleUrls: ['./allmovies.component.css']
})
export class AllmoviesComponent implements OnInit {

  allmovies:string[];

  constructor(
    private allmovieService: AllmovieService
  ) { }

  ngOnInit(): void {

    this.allmovieService.getMovies().then(
      ( data_allmovie:any ) => {
        this.allmovies = data_allmovie;
      }
    )

  }

}
