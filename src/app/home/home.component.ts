import { Component, OnInit } from '@angular/core';
import { AllmovieService } from './allmovie.service';
import { DestacadosService } from './destacados.service';
import { LastmoviesService } from './lastmovies.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

    recomended_movies:any = [];
    allmovies:any = [];
    alldestacados:any = [];
    lastmovies:any = [];

    /** varibales del buscador de peliculas */
    inputsearch:any = 'ej. Duro de Cuidar';

    constructor( 
      private allmovieService : AllmovieService,
      private destcadosService : DestacadosService,
      private lastmoviesService : LastmoviesService  
    ) { }

    ngOnInit() {
      this.allmovieService.getMovies().then(
        (movies_data : any) => {
          this.allmovies = movies_data;
        }
      );

      this.destcadosService.getRelevantes().then(
        ( destacados_data : any ) => {
          this.alldestacados = destacados_data;
        }
      );

      this.lastmoviesService.getLastMovies().then(
        ( lastmovies_data : any ) => {
          this.lastmovies = lastmovies_data;
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

    search_movie():void {
      console.log( this.inputsearch );
    }

}
