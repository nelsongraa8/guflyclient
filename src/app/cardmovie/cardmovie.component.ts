import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-cardmovie',
  templateUrl: './cardmovie.component.html',
  styleUrls: ['./cardmovie.component.css']
})
export class CardmovieComponent implements OnInit {

  @Input() item:any;

  constructor() { }

  ngOnInit(): void {
  }

}
