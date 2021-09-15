import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MovieComponent } from './movie/movie.component';
import { CardmovieComponent } from './cardmovie/cardmovie.component';

//import {NgbModule} from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  declarations: [
    AppComponent,
    MovieComponent,
    CardmovieComponent
  ],
  imports: [
    BrowserModule,  // Este modulo carga el sistema del navegador
    AppRoutingModule,  // Este modulo canrga las rutas
    //NgbModule,  // Este modulo carga el bootstrap
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
