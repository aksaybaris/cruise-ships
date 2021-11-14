/* globals describe it expect */
const Ship = require("../ship");
const Port = require("../port");
const Itinerary = require("../itinerary");


describe("Ship object",()=>{
    let dover;
    let myItinerary;
    let myShip; 

    beforeEach(()=>{
        dover = new Port("Dover");
        myItinerary = new Itinerary([dover]);
        myShip = new Ship(myItinerary);

    })

    it("can be instantiated", ()=>{
        expect(myShip).toBeInstanceOf(Object);
    })

    it("should test the currentPort property",() =>{
        expect(myShip).hasOwnProperty("currentPort");
    })

    it("has a starting port",()=>{
        expect(myShip.currentPort).toBe(dover);
    })

    it("should set sail",()=>{
        let calais = new Port("calais")
        myItinerary.ports.push(calais);
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

})

describe("dock method",()=>{

    let dover;
    let calais;
    let myItinerary;
    let myShip;
    beforeEach(()=>{
        dover = new Port("dover");
        calais = new Port("calais");
        myItinerary = new Itinerary([dover,calais]);
        myShip= new Ship(myItinerary);
        myShip.setSail();
        myShip.dock();
    })

    it("should test the dock method",()=>{
        expect(myShip.currentPort).toEqual(calais);
    })

    it("cant sail further than itinerary",()=>{
        expect(()=>myShip.setSail()).toThrowError("End of tour");
    })

})