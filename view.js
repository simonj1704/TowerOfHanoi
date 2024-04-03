export default class View {
    constructor() {
        this.createTowers();
        //this.makeBoardClickable();
    }

    makeBoardClickable(){
        document.querySelector("#towers").addEventListener("mousedown", discClicked);
    }

    discClicked(event){
        const disc = event.target;
        console.log("Disc clicked")
        
        if(disc.classList.contains("disc")){
            console.log(disc)
        }
    }

    createTowers() {
        const towers = document.querySelector("#towers");
        
        for(let i = 0; i < 3; i++) {
            const tower = document.createElement("div");
            const bottom = document.createElement("div");
            
            bottom.classList.add("bottom");
            tower.classList.add("tower");
            tower.id = "tower" + i;
            tower.appendChild(bottom);
            towers.appendChild(tower);
        }
    }
    

    displayData(model){
        console.log("display")
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
        disc.classList.add("disc"+size)
        console.log(disc)
        return disc
    }
}