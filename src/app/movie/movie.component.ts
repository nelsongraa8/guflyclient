import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { MovieService } from './movie.service';

@Component({
  selector: 'app-movie',
  templateUrl: './movie.component.html',
  styleUrls: ['./movie.component.css']
})
export class MovieComponent implements OnInit {

  //data_movie:any = [];
  movie_singler:any;
  movie_singler_api:any;
  movie_singler_credits:any;

  /** id de la ruta para saber que ID_movie es */
  id_route_movie:any;

  /** variables formateadas de los datos de la API TheMovieDB */
  duracion:any;
  anno_estreno:any;
  idioma_subtitle:any = 'Español';

  lista_actores:any = [];
  // lista_actores = [
  //   { 'foto':'Ryan_Reynolds.jpg', 'name':'Ryan Reynolds' },
  //   { 'foto':'Samuel_L._Jackson_Cannes.jpg', 'name':'Samuel L. Jackson Cannes' },
  //   { 'foto':'Gary_Oldman.jpg', 'name':'Gary Oldman' },
  //   { 'foto':'Elodie_Yung_by_Gage_Skidmore.jpg', 'name':'Elodie Yung' },
  //   { 'foto':'Joaquim_de_Almeida.jpg', 'name':'Joaquim de Almeida' },
  // ];

  // recomended_movies = [
  //   { 'name' : '6 Underground' , 'foto' : '6_underground-411208949-mmed.jpg' , 'anno' : '2016' },
  //   { 'name' : '10LXS' , 'foto' : 'poster_howls_moving_castle.jpg' , 'anno' : '2020' },
  //   { 'name' : 'Rapido y Furioso' , 'foto' : '2_fast_2_furious-199382456-mmed.jpg' , 'anno' : '2006' },
  // ];

  constructor( private movieService : MovieService , private rutaActiva: ActivatedRoute ) {}

  ngOnInit() {

    this.id_route_movie = this.rutaActiva.snapshot.params.id_movie;

    this.movieService.getSinglerMovies( this.id_route_movie )
    .then(
      ( movie_singler_data : any ) => {
        this.movie_singler = movie_singler_data.data;
        this.movie_singler_api = movie_singler_data.data_api;
        this.movie_singler_credits = movie_singler_data.data_api_credits;

        this.duracion = this.format_duracion(this.movie_singler_api.runtime );
        this.anno_estreno = this.format_release_date(this.movie_singler_api.release_date );

        this.create_list_actores();
      }
    );

  }

  /** Creando un formato de Duraction (tiempo) que tiene la pelicula */
  format_duracion( value_duracion : any )
  {
    let horas : number;
    let minutos : number;

    horas = (value_duracion / 60);
    minutos = value_duracion % 60;

    horas = Math.round(horas);
    minutos = Math.round(minutos);

    return horas+'h '+minutos+'m';
  }

  /** Formatenado el anno de estreno de la pelicula */
  format_release_date( data_formatless:any )
  {
    let data_array = data_formatless.split( '-' );
    return data_array[0];
  }

  /** Formato a los generos de peliculas */
  format_genero_movie( value_format:any )
  {
    let salida:string = '';

    let index:number = 0;
    for ( const iterator of this.movie_singler_api.genres ) {
      if( value_format == 'coma_title' ) {
        if( index == 0 ) {  salida = iterator.name }
        else { salida = salida + ', ' + iterator.name; }
      }
      index++;
    }

    return salida;
  }

  format_director_movie( value_format:any )
  {
    let salida:string = '';

    let index:number = 0;
    for ( const iterator of this.movie_singler_credits.crew ) {
      //let director = iterator.job
      if( iterator.job == 'Director' ) {
        if( value_format == 'coma_title' ) {
          if( index == 0 ) {  salida = iterator.name }
          else { salida = salida + ', ' + iterator.name; }
        }
        index++;
      }
    }

    return salida;
  }

  /** Las peliculas tiene un estado que puede ser estrenado o sin estrenar */
  format_status_movie(  )
  {
    let status = this.movie_singler_api.status;
    let salida = '';

    if( status == 'Released' ) { salida = 'Estrenada'; }

    return salida;
  }

  /** Formatear la salida de lenguajes */
  format_language_movie()
  {
    let language = this.movie_singler_api.original_language;
    let salida;

    if( language == 'en' ) { salida = 'Ingles' }
    if( language == 'es' ) { salida = 'Español' }
    else { salida = language; }

    return salida;
  }

  /** Creando la lista de los 10 principales actores de la movie que se esta tratando */
  create_list_actores() {
    let json_actores = this.movie_singler_credits.cast

    let index = 0;
    for (const iterator of json_actores) {
      if( index < 10 ) {
        this.lista_actores[index] = { 
          'foto':'https://www.themoviedb.org/t/p/w138_and_h175_face'+iterator.profile_path,
          'name':iterator.name,
          'name_character':iterator.character
        };
      }
      index++
    }
  }




}
