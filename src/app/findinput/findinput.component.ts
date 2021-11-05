import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FindmovieComponent } from '../findmovie/findmovie.component'

@Component({
  selector: 'app-findinput',
  templateUrl: './findinput.component.html',
  styleUrls: ['./findinput.component.css']
})
export class FindinputComponent implements OnInit {

  inputsearch:any = '';

  constructor( private route:Router ) { }

  ngOnInit(): void {
  }

  search_movie( name_search:any ) {
    this.inputsearch = name_search;
    console.log( this.inputsearch );

    /**  Esto es una basura podria hacerse muchisimo mejor en futuros Commit mejorara la forma en la que busca */
    this.route.navigateByUrl( '/search/' + this.inputsearch).then(
      () => {
        location.reload();
      }
    );

  }

}
