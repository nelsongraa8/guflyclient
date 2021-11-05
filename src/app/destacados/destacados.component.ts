import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-destacados',
  templateUrl: './destacados.component.html',
  styleUrls: ['./destacados.component.css']
})
export class DestacadosComponent implements OnInit {

  @Input() alldestacados:any;

  constructor() { }

  ngOnInit(): void {
  }

}
