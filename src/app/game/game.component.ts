import { Component, OnInit } from '@angular/core';
import { timer, Observable, Subscription } from 'rxjs';

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


  //counter for game
  subscription:Subscription;
  source;
  counter;

  //check if game is running
  gameIsRunning:boolean = false;

  constructor() { }

  ngOnInit() {
  }

  setRows(){
    this.rows = Array(this.numRows);
  }

  setCols(){
    this.cols = Array(this.numCols);
  }

  startTimer(){
    const source = timer(0,1000);
    this.subscription = source.subscribe(val => this.counter = val);
  }

  resetTimer(){
    this.subscription.unsubscribe();
  }

  startOrStopGame(){
    if(!this.gameIsRunning){
      this.startTimer();
      this.gameIsRunning = true;
    }else{
      this.gameIsRunning = false;
      this.resetTimer();
    }
  }


  exposeCell(){}

}
