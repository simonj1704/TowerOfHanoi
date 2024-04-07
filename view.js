export default class View {
    constructor(controller) {
        this.createTowers();
        this.makeBoardClickable();
        this.controller = controller;
    }

    makeBoardClickable(){
        document.querySelector("#towers").addEventListener("mousedown", (event) => this.discClicked(event));
    }

    discSelected = null;

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
        
    }
    

    createTowers() {
        const towers = document.querySelector("#towers");
        
        for(let i = 0; i < 3; i++) {
            const tower = document.createElement("div");
            const bottom = document.createElement("div");
            
            bottom.classList.add("bottom");
            tower.classList.add("tower");
            tower.id = i;
            tower.appendChild(bottom);
            towers.appendChild(tower);
        }
    }
    

    displayData(model){
        console.log("display")
        document.querySelectorAll(".towers").forEach(tower => tower.innerHTML = "")
        const towers = document.querySelectorAll(".tower")
        for (let i = 0; i < towers.length; i++) {
            if(model[i].length !== 0){
                for (let j = 0; j < model[i].length; j++) {
                    towers[i].appendChild(this.createDisc(model[i][j]))
                    
                }   
            }
        }
    }

    createDisc(size){
        const disc = document.createElement("div")
        disc.classList.add("disc");
        disc.classList.add("disc"+size)
        disc.id = "disc" + size;
        console.log(disc)
        return disc
    }
}