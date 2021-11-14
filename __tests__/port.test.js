const Port = require("../port");

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