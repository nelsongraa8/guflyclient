import { Component, OnInit } from '@angular/core';
import { AllmovieService } from './allmovie.service';
import { DestacadosService } from './destacados.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

    recomended_movies:any = [];
    allmovies:any = [];
    alldestacados:any = [];

    array_data_json( this_array : any ) {
      let index = 0;
      let array_json = [];

      for (let iterator of this_array.data) {
        let nombre = iterator.nombre;
        let poster = iterator.poster;
        let anno = iterator.anno;
        let fanart = iterator.fanart;

        array_json[index] = { 'name' : nombre , 'foto' : poster , 'anno' : anno , 'fanart' : fanart  };

        index++;
      }

      console.log(array_json)
      return array_json;
    }

    constructor( private allmovieService : AllmovieService, private destcadosService : DestacadosService ) { }

    ngOnInit() {
      this.allmovieService.getMovies().then(
        (movies_data : any) => {
          this.allmovies = this.array_data_json( movies_data );
        }
      );

      this.destcadosService.getRelevantes().then(
        ( destacados_data : any ) => {
          this.alldestacados = this.array_data_json( destacados_data );
        }
      );

    }

    getClass(identificador_class : any) {
      let classes = '';
      if (identificador_class == 0) {
        classes = 'active';
      }
      return classes;
    }

}
