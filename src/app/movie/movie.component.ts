import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { MovieService } from './movie.service';

@Component({
  selector: 'app-movie',
  templateUrl: './movie.component.html',
  styleUrls: ['./movie.component.css']
})
export class MovieComponent implements OnInit {

  data_movie:any = [];
  movie_singler:any;
  id_route_movie:any;

  lista = [
    { 'foto':'Ryan_Reynolds.jpg', 'name':'Ryan Reynolds' },
    { 'foto':'Samuel_L._Jackson_Cannes.jpg', 'name':'Samuel L. Jackson Cannes' },
    { 'foto':'Gary_Oldman.jpg', 'name':'Gary Oldman' },
    { 'foto':'Elodie_Yung_by_Gage_Skidmore.jpg', 'name':'Elodie Yung' },
    { 'foto':'Joaquim_de_Almeida.jpg', 'name':'Joaquim de Almeida' },
  ];

  recomended_movies = [
    { 'name' : '6 Underground' , 'foto' : '6_underground-411208949-mmed.jpg' , 'anno' : '2016' },
    { 'name' : '10LXS' , 'foto' : 'poster_howls_moving_castle.jpg' , 'anno' : '2020' },
    { 'name' : 'Rapido y Furioso' , 'foto' : '2_fast_2_furious-199382456-mmed.jpg' , 'anno' : '2006' },
  ];

  constructor( private movieService : MovieService , private rutaActiva: ActivatedRoute ) {}

  ngOnInit() {

    this.id_route_movie = this.rutaActiva.snapshot.params.id_movie;

    this.movieService.getSinglerMovies( this.id_route_movie )
    .then(
      ( movie_singler_data : any ) => {
        this.movie_singler = movie_singler_data.data[0];
        this.movie_singler.duracion = this.format_duracion(this.movie_singler.duracion );

        this.data_movie = [
          { 'name' : 'Duracion' , 'value' : this.movie_singler.duracion },
          { 'name' : 'Subtitulo' , 'value': this.movie_singler.idioma_subtitulo },
          { 'name' : 'Año' , 'value': this.movie_singler.anno },
          { 'name' : 'Genero' , 'value': this.movie_singler.genero },
          { 'name' : 'Director' , 'value': this.movie_singler.director },
        ];

      }
    );

  }

  format_duracion( value_duracion : any ) {
    let horas : number;
    let minutos : number;

    horas = (value_duracion / 3600);
    minutos = (value_duracion / 60) % 60;

    horas = Math.round(horas);
    minutos = Math.round(minutos);

    return horas+'h '+minutos+'m';
  }



}
