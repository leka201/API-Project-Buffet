// class sempre tem um construtor(que é uma função)

class Party{
    constructor(pid, ptype, pdecorations, pitems, pfood){
        this.id = pid
        this.type = ptype
        this.decorations = pdecorations
        this.items = pitems
        this.food = pfood

        // colocar outros controladores 
    }
}

module.exports = Party