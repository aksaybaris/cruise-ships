const Itinerary = require("../itinerary");

describe("Itinerary object",()=>{
    it("can be instantiated", ()=>{
        let myItinerary = new Itinerary();
        expect(myItinerary).toBeInstanceOf(Object);
    })

    it("should test the ports property of Itinerary object",() =>{
        let myItinerary = new Itinerary();
        expect(myItinerary).hasOwnProperty("ports");
    })

})