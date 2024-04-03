"use strict";

import View from "./view.js";
import Model from "./model.js";

window.addEventListener("load", start)

function start(){
    const controller = new Controller();
    console.log(controller.model.towers)
    controller.model.moveDisc(0,1)
    controller.model.moveDisc(0,2)
    controller.model.moveDisc(2,1)
    controller.model.moveDisc(0,2)
    controller.model.moveDisc(1,0)
    controller.model.moveDisc(1,2)
    controller.model.moveDisc(0,2)
    console.log(controller.model.towers[2])
    console.log(controller.model.towers[0])
}

class Controller {
  constructor() {
    this.model = new Model(9);
    this.view = new View();
    this.gameStart()
  }

  gameStart(){
    this.displayData()
  }

  displayData() {
    this.view.displayData(this.model.towers)
  } 
}