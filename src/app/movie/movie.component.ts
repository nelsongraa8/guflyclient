import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-movie',
  templateUrl: './movie.component.html',
  styleUrls: ['./movie.component.css']
})
export class MovieComponent implements OnInit {

  poster:any;
  lista:any = [];
  description:any = 'El prestigioso guardaespaldas Michael Bryce recibe un nuevo cliente: un asesino a sueldo, Darius Kincaid, que debe testificar en un juicio en La Haya contra un cruel dictador. ';
  data_movie:any = [];
  recomended_movies:any = [];

  id_route_movie:any;

  constructor( private rutaActiva: ActivatedRoute ) {
    this.poster = 'poster.jpg';
    this.lista = [
      { 'foto':'Ryan_Reynolds.jpg', 'name':'Ryan Reynolds' },
      { 'foto':'Samuel_L._Jackson_Cannes.jpg', 'name':'Samuel L. Jackson Cannes' },
      { 'foto':'Gary_Oldman.jpg', 'name':'Gary Oldman' },
      { 'foto':'Elodie_Yung_by_Gage_Skidmore.jpg', 'name':'Elodie Yung' },
      { 'foto':'Joaquim_de_Almeida.jpg', 'name':'Joaquim de Almeida' },
    ];
    this.data_movie = [
      { 'name' : 'Duracion' , 'value' : '1h 58m' },
      { 'name' : 'Subtitulo' , 'value': 'Español'},
      { 'name' : 'Año' , 'value': '2017'},
      { 'name' : 'Genero' , 'value': 'Accion'},
      { 'name' : 'Director' , 'value': 'Patrick Hughes'},
    ];
    this.recomended_movies = [
      { 'name' : '6 Underground' , 'foto' : '6_underground-411208949-mmed.jpg' , 'anno' : '2016' },
      { 'name' : '10LXS' , 'foto' : '10-latidos-por-segundo-834x1024.jpg' , 'anno' : '2020' },
      { 'name' : 'Rapido y Furioso' , 'foto' : '2_fast_2_furious-199382456-mmed.jpg' , 'anno' : '2006' },
    ]
  }

  ngOnInit() {
    this.id_route_movie = this.rutaActiva.snapshot.params.id_movie;
  }

}
