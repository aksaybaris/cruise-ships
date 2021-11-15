const Port = require("../port");
const Ship = require("../ship");

describe("Port object",()=>{
let myPort;
    beforeEach(()=>{
        myPort = new Port("Dover");
    })

    it("can be instantiated", ()=>{
        expect(myPort).toBeInstanceOf(Object);
    })

    it("should test the name property",() =>{
        expect(myPort).hasOwnProperty("name");
    })

})

describe("addShip method",()=>{
    it("can add a ship to the port",()=>{
        const port1 = new Port("port1");
        const myShip = {};
        port1.addShip(myShip);

        expect(port1.ships).toContain(myShip);
    })
})

describe("removeShip method",()=>{
    it("can remove a ship from the port",()=>{
        const port1 = new Port("port1");
        const ship1 = {};
        const ship2 = {};

        port1.addShip(ship1);
        port1.addShip(ship2);
        port1.removeShip(ship2);

        expect(port1.ships).toEqual([ship1]);
    })
})