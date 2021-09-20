import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MovieComponent } from './movie/movie.component';
import { CardmovieComponent } from './cardmovie/cardmovie.component';
import { HomeComponent } from './home/home.component';

@NgModule({
  declarations: [
    AppComponent,
    MovieComponent,
    CardmovieComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,  // Este modulo carga el sistema del navegador
    AppRoutingModule,  // Este modulo canrga las rutas
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
