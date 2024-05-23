class Uber {
    constructor(passengerName,location,destination,distance,upAndDown){
        this.passengerName = passengerName;
        this.location = location;
        this.destination = destination;
        this.distance = Number(distance);
        this.upAndDown = Boolean(upAndDown);
    }
    getPassengerName() {
        return this.passengerName;
    }
    getLocation() {
        return this.location;
    }
    getDestination() {
        return this.destination;
    }
    getDistance() {
        return this.destination;
    }
    getUpAndDown() {
        return this.upAndDown;
    }
    getUberPrice() {
        let price = 0;
        let perCostTillFive = 20;
        let perCostAfterFive = 25;
        if(this.distance<=5){
            price = this.distance * perCostTillFive;
        }
        else{
            price = ((this.distance-5) * perCostAfterFive) + (5 * perCostTillFive);
        }
        if(this.upAndDown === true){
            return price*2;
        }
        else{
            return price;
        }
    }
}

let passenger1 = new Uber("mukesh","A","B",23,true);
console.log(`${passenger1.getPassengerName()} uber price is: `,passenger1.getUberPrice(),"INR")

let passenger2 = new Uber("khanna","C","D",4,false);
console.log(`${passenger2.getPassengerName()}'s uber price: `,passenger2.getUberPrice(),"INR")