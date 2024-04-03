class TowerOfHanoiModel {
    constructor() {
      this.towers = [[3, 2, 1], [], []];
    }
  
    moveDisk(from, to) {
      const fromTower = this.towers[from];
      const toTower = this.towers[to];
      if (fromTower.length === 0) return false; // Ingen disk at flytte
      if (toTower.length === 0 || fromTower[fromTower.length - 1] < toTower[toTower.length - 1]) { // Tjekker om disken kan flyttes
        const disk = fromTower.pop();
        toTower.push(disk);
        return true;
      }
      return false;
    }
  }
  