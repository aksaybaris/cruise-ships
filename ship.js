class Ship {
    constructor(itinerary){
        this.itinerary = itinerary;
        this.currentPort = itinerary.ports[0];
        this.previousPort = null;
    }
    setSail(){
        const itineraryArray = this.itinerary.ports
        const currentPortIndex = itineraryArray.indexOf(this.currentPort)

        if(currentPortIndex === itineraryArray.length-1){
            throw new Error("End of tour");
        }

        this.previousPort= itineraryArray[currentPortIndex];
        this.currentPort= null;
        
        
    }
    dock(){
        const itineraryArray = this.itinerary.ports
        const previousPortIndex = itineraryArray.indexOf(this.previousPort)
        const nextPortIndex = previousPortIndex+1
        this.currentPort = itineraryArray[nextPortIndex];

    }
};

module.exports= Ship;