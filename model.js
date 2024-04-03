export default class Model {
    constructor(size) {
      this.makeTowers(size)                                               
      this.startSize = size
    }

    makeTowers(size){
      this.towers = [[],[],[]]
      for (let i = size; i > 0; i--){
        this.towers[0].push(i)
      }
    }
  
    moveDisc(from, to) {
      const fromTower = this.towers[from];
      const toTower = this.towers[to];
      if (fromTower.length === 0) return false; // Ingen disk at flytte
      if (toTower.length === 0 || fromTower[fromTower.length - 1] < toTower[toTower.length - 1]) { // Tjekker om disken kan flyttes
        const disk = fromTower.pop();
        toTower.push(disk);
        this.checkWin();
        return true;
      }
      console.log("Disc could not be Moved")
      return false;
    }

    checkWin(){
      
      if(this.towers[2].length === this.startSize){
        console.log("You have won")
        //TODO remove click eventlisteners
        return true
      } else {
        return false;
      }
    }

    solve(){

    }
  }

  