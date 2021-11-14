class Ship {
    constructor(currentPort){
        this.currentPort = currentPort;
        this.previousPort = null;
    }
    setSail(){
        this.currentPort="";
    }
    dock(newPort){
        this.currentPort = newPort;
    }
};

module.exports= Ship;