import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { MovieComponent } from './movie/movie.component';

const routes: Routes = [
  //{ path: '', component: AppComponent,  pathMatch: 'full'},
  { path: 'movie', component: MovieComponent,  pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
