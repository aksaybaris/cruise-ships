class Port{
    constructor(name){
        this.name=name;
        this.ships=[];
    }
    addShip(ship){
        this.ships.push(ship);
    }
    removeShip(ship){
        const shipToRemove = this.ships.indexOf(ship);

        this.ships.splice(shipToRemove);
    }
}
module.exports= Port;