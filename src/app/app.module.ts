import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MovieComponent } from './movie/movie.component';
import { CardmovieComponent } from './cardmovie/cardmovie.component';
import { HomeComponent } from './home/home.component';

import { HttpClientModule } from '@angular/common/http';

import { FormsModule } from '@angular/forms';
import { FindmovieComponent } from './findmovie/findmovie.component';
import { FindinputComponent } from './findinput/findinput.component';
import { DestacadosComponent } from './destacados/destacados.component';
import { LastmoviesComponent } from './lastmovies/lastmovies.component';
import { AllmoviesComponent } from './allmovies/allmovies.component';

@NgModule({
  declarations: [
    AppComponent,
    MovieComponent,
    CardmovieComponent,
    HomeComponent,
    FindmovieComponent,
    FindinputComponent,
    DestacadosComponent,
    LastmoviesComponent,
    AllmoviesComponent
  ],
  imports: [
    BrowserModule,  // Este modulo carga el sistema del navegador
    AppRoutingModule,  // Este modulo canrga las rutas
    HttpClientModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
