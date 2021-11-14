const Itinerary = require("../itinerary");
const Port = require("../port");

describe("Itinerary object",()=>{
    it("can be instantiated", ()=>{
        let myItinerary = new Itinerary();
        expect(myItinerary).toBeInstanceOf(Object);
    })

    it("should test the ports property of Itinerary object",() =>{
        let myItinerary = new Itinerary();
        expect(myItinerary).hasOwnProperty("ports");
    })

    it("can have multiple ports",()=>{
        const barcelona = new Port("barcelona");
        const genova = new Port("genova");
        const myItinerary = new Itinerary([barcelona,genova])

        expect(myItinerary.ports).toEqual([barcelona,genova]);
    })

})