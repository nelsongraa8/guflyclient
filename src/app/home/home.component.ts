import { Component, OnInit } from '@angular/core';
import { AllmovieService } from './allmovie.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

    recomended_movies:any = [];

    constructor( private allmovieService : AllmovieService ) {
      this.recomended_movies = [
        { 'name' : '6 Underground' , 'foto' : '6_underground-411208949-mmed.jpg' , 'anno' : '2016' },
        { 'name' : '10LXS' , 'foto' : '10-latidos-por-segundo-834x1024.jpg' , 'anno' : '2020' },
        { 'name' : 'Rapido y Furioso' , 'foto' : '2_fast_2_furious-199382456-mmed.jpg' , 'anno' : '2006' },
      ];
    }

    ngOnInit() {
      this.allmovieService.getMovies().then(
        (movies : any) => {
          console.log(movies);
        }
      )
    }

}
