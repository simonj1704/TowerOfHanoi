"use strict";

import View from "./view.js";
import Model from "./model.js";

window.addEventListener("load", start)

function start(){
    const controller = new Controller();
    
}

class Controller {
  constructor() {
    this.model = new Model(document.querySelector("#numDiscs").value);
    this.view = new View(this);
    this.gameStart()
  }

  gameStart(){
    const resetButton = document.getElementById("reset");
    resetButton.addEventListener("click", () => {
      this.resetGame();
  });
  document.getElementById("start").addEventListener("click", () => {
    this.newModel(document.querySelector("#numDiscs").value);
  });
    this.displayData()

    document.querySelector("#solve").addEventListener("click", () => {
      this.getSolution();
    });
  }

  newModel(size){
    this.model = new Model(size);
    this.displayData()

  }

  displayData() {
    this.view.displayData(this.model.towers)
  } 

  moveDisc(from, to){
    console.log(from, to)
    this.model.moveDisc(from, to)
    console.log(this.model.towers)
    this.displayData()
  }

  resetGame(){
    this.view.moveCounter = 0;
    document.querySelector("#moveCounter").innerText = "Moves made: " + this.view.moveCounter;
    this.newModel(document.querySelector("#numDiscs").value);
    this.displayData()
  }

  getSolution(){
    this.model.solve(this.model.startSize, 0, 2, 1);
    console.log(this.model.solution)
    const solution = this.model.solution
    solution.forEach((move, index) => {
      setTimeout(() => {
        this.moveDisc(move[0], move[1])
      }, (index + 1) * 200);
    });
  }
}