import { Component, OnInit } from '@angular/core';
import { AllmovieService } from './allmovie.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

    recomended_movies:any = [];

    constructor( private allmovieService : AllmovieService ) { }

    ngOnInit() {
      this.allmovieService.getMovies().then(
        (movies : any) => {
          console.log(movies.data[0]);

          let index = 0;
          for (let iterator of movies.data) {
            let nombre = iterator.nombre;
            let poster = iterator.poster;
            let anno = iterator.anno;

            this.recomended_movies[index] = { 'name' : nombre , 'foto' : poster , 'anno' : anno };

            index++;
          }
        }
      )
    }

}
