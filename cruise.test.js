const Ship = require("./cruise");

describe("constructor have a property of starting dock",()=>{
    it("should create an instance of constructor",()=>{
        let ship1 = new Ship("Girne");
        expect(new Ship).toBeInstanceOf(Object);
    });

    it("should have a starting port", ()=>{
        let ship1 = new Ship("Girne");
        expect(ship1.startingPort).toBe("Girne");

    });
});


describe("starting port should change state to false", ()=>{
    it("should change the port to falsy value", ()=>{
        let ship1 = new Ship("Girne");
        ship1.canSetSail();
        expect(ship1.startingPort).toBeFalsy();
    })
})
