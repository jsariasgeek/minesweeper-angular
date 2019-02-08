import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.css']
})
export class GameComponent implements OnInit {

  numRows = 9
  numCols = 9
  numMines = 9

  rows = Array(this.numRows);
  cols = Array(this.numCols);

  constructor() { }

  ngOnInit() {
  }

  setRows(){
    this.rows = Array(this.numRows);
  }

  setCols(){
    this.cols = Array(this.numCols);
  }


  exposeCell(){}

}
