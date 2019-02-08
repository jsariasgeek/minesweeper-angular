import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.css']
})
export class GameComponent implements OnInit {

  rows = Array(9)
  cols = Array(9)

  constructor() { }

  ngOnInit() {
    console.log(this.rows);
  }

}
