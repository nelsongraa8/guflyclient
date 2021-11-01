import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})

export class AppComponent {

  inputsearch:any

  search_movie():void {
    this.inputsearch = 'this search';
    console.log(this.inputsearch);
  }
}
