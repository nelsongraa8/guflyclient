import { Component, OnInit } from '@angular/core';
// import { AllmovieService } from '../allmovies/allmovie.service';
import { DestacadosService } from '../destacados/destacados.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

    // recomended_movies:any = [];
    // allmovies:any = [];
    alldestacados:any = [];

    constructor(
      // private allmovieService : AllmovieService,
      private destacadosService : DestacadosService,
    ) { }

    ngOnInit() {
      // this.allmovieService.getMovies().then(
      //   (movies_data : any) => {
      //     this.allmovies = movies_data;
      //   }
      // );

      this.destacadosService.getRelevantes().then(
        ( data_relevantes:any ) => {
          this.alldestacados = data_relevantes;
        }
      )

    }

    getClass(identificador_class : any) {
      let classes = '';
      if (identificador_class == 0) {
        classes = 'active';
      }
      return classes;
    }

}
