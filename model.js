export default class Model {
    constructor(size) {
      this.makeTowers(size)                                               
      this.startSize = parseInt(size)
    }

    moveCounter;

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
      if (toTower.length === 0 || fromTower[0] > toTower[0]) { // Tjekker om disken kan flyttes
        const disk = fromTower.shift();
        toTower.unshift(disk);
        return true;
      }
      console.log("Disc could not be Moved")
      return false;
    }

    checkWin(){
      console.log(this.towers[2].length, this.startSize)
      if(this.towers[2].length === this.startSize){
        console.log("You have won")
        this.win = true;
        return true
      } else {
        return false;
      }
    }

    win=false;

    solve(n, from_rod, to_rod, aux_rod){
      if(n == 0){
        return
      }
      this.solve(n-1, from_rod, aux_rod, to_rod);
      this.solution.push([from_rod, to_rod])
      this.solve(n-1, aux_rod, to_rod, from_rod);
    }

    solution = [];
    
  }