import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FindmovieComponent } from './findmovie/findmovie.component';
import { HomeComponent } from './home/home.component';
import { MovieComponent } from './movie/movie.component';

const routes: Routes = [
  { path: '', component: HomeComponent, pathMatch: 'full' },
  { path: 'movie/:id_movie', component: MovieComponent },
  { path: 'search/:name_search_movie' , component: FindmovieComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
