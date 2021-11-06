const Ship = require("./cruise");

describe("constructor have a property of starting dock",()=>{
    it("should create an instance of constructor",()=>{
        let ship1 = new Ship("Girne");
        expect(new Ship).toBeInstanceOf(Object);
    });

    it("should have a starting dock", ()=>{
        let ship1 = new Ship("Girne");
        expect(ship1.startingPort).toBe("Girne");

    });
});
