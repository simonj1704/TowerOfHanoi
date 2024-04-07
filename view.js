export default class View {
    constructor(controller) {
        this.controller = controller;
        this.boundDiscClicked = this.discClicked.bind(this);
        this.makeBoardClickable();
    }
    
    makeBoardClickable() {
        document.querySelector("#towers").addEventListener("mousedown", this.boundDiscClicked);
    }
    
    boardUnclickable() {
        console.log("Board unclickable");
        document.querySelector("#towers").removeEventListener("mousedown", this.boundDiscClicked);
    }
    

    winGame(){
        console.log("Win game")
        this.boardUnclickable();
        document.querySelector("#win-msg").innerText = "You won!";
    }

    discSelected = null;
    moveCounter = 0;

    discClicked(event){
        event.stopPropagation();
        const disc = event.target.closest('.disc');
        if(this.discSelected !== null){
            const clickedTower = event.target.closest(".tower").id;
            const toTower = this.discSelected;
            console.log(this.discSelected)
            console.log(clickedTower)
            this.discSelected = null;
            this.moveDisc(toTower, clickedTower);

        } else if(disc) {
            const towerDiscs = Array.from(disc.parentNode.querySelectorAll('.disc:not(.bottom)'));
            const topDisc = towerDiscs[0];
            console.log("Disc clicked: " + disc.id);
            if(disc === topDisc) {
                console.log("Top Disc clicked: " + disc.id);
            }
            topDisc.style = "border: 2px solid black;";
            this.discSelected = event.target.closest('.tower').id;
        }

    }

    moveDisc(fromTower, toTower) {
        this.controller.moveDisc(fromTower, toTower);
        this.moveCounter++;
        document.querySelector("#moveCounter").innerText = "Moves made: " + this.moveCounter;

        
    }
    
    createBottom(tower){
        tower.innerHTML = ""

        const bottom = document.createElement("div");
            
            bottom.classList.add("bottom");
            tower.appendChild(bottom);

            tower.classList.add("tower");
    }

    displayData(model) {
        console.log("display");
        document.querySelectorAll(".tower").forEach(tower => 
            this.createBottom(tower)
        );
        
        const towers = document.querySelectorAll(".tower");
        for (let i = 0; i < towers.length; i++) {
            if (model[i].length !== 0) {
                for (let j = 0; j < model[i].length; j++) {
                    towers[i].appendChild(this.createDisc(model[i][j], model[i].length - j));
                }
            }
        }
    }
    
    createDisc(size, numberOfDiscs) {
        const disc = document.createElement("div");
        disc.classList.add("disc");
        disc.classList.add("disc" + size);
        disc.id = "disc" + size;
    
        const bottomPosition = 20 * (numberOfDiscs);
    
        disc.style.bottom = bottomPosition + "px";
    
        return disc;
    }

    resetBoard() {
        this.moveCounter = 0;
        document.querySelector("#moveCounter").innerText = "";
        document.querySelector("#win-msg").innerText = "";
        this.controller.resetGame();
    }

    incrementMoveCounter() {
        this.moveCounter++;
    }
}