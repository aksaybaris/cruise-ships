/* globals describe it expect */
const Ship = require("../ship");
const Port = require("../port");
/*const Itinerary = require("../itinerary");*/


describe("Ship object",()=>{
    let dover;
    let myShip; 

    beforeEach(()=>{
        dover = new Port("Dover")
        myShip = new Ship(dover);
    })

    it("can be instantiated", ()=>{
        expect(myShip).toBeInstanceOf(Object);
    })

    it("should test the currentPort property",() =>{
        expect(myShip).hasOwnProperty("currentPort");
    })

    it("should set sail",()=>{
        myShip.setSail();
        expect(myShip.currentPort).toBeFalsy();
        expect(myShip.previousPort).toEqual(dover);
    })

    it("should take Port object as parameter",()=>{
        expect(myShip.currentPort).toBeInstanceOf(Object);
    })
    
    it("should take Port object value for port property",()=>{
        expect(myShip.currentPort).toBe(dover)
    })

    it("should test the dock method",()=>{
        let calais = new Port("calais");
        myShip.dock(calais);
        expect(myShip.currentPort).toEqual(calais);
    })

})