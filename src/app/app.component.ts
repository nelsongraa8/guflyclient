import { Component } from '@angular/core';
import { OnInit } from '@angular/core';
import { CardmovieComponent } from './cardmovie/cardmovie.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {

    recomended_movies:any = [];

    constructor() {
      this.recomended_movies = [
        { 'name' : '6 Underground' , 'foto' : '6_underground-411208949-mmed.jpg' , 'anno' : '2016' },
        { 'name' : '10LXS' , 'foto' : '10-latidos-por-segundo-834x1024.jpg' , 'anno' : '2020' },
        { 'name' : 'Rapido y Furioso' , 'foto' : '2_fast_2_furious-199382456-mmed.jpg' , 'anno' : '2006' },
      ]
    }

    ngOnInit() { }

}
