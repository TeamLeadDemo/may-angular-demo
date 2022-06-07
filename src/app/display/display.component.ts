import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'display',
  templateUrl: './display.component.html',
  styleUrls: ['./display.component.css']
})
export class DisplayComponent implements OnInit {

  // render this property in the template
  movieName = 'Avengers: End Game';

  constructor() { }

  ngOnInit(): void {
  }

}
