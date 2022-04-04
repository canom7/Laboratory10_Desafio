//DESAFIO
const bookings = [
    {
        roomType: "standard",
        pax: 1,
        nights: 3
    },
    {
        roomType: "standard",
        pax: 1,
        nights: 4
    },
    {
        roomType: "suite",
        pax: 2,
        nights: 1
    }
];

class generalHotelBookings {
    constructor(suite, standard){
        this._bookings = [];
        this._subtotal = 0;
        this._total = 0;

        this.standard = standard;
        this.suite = suite;
    }

    calculateExtraPerson(pax, nights){
        let extraPerson = (pax > 1) ? ((pax-1) * nights * 40) : 0;
        return extraPerson;
    };

    calculateSubtotal(){
        //this._subtotal = bookings.reduce((acc, {roomType, pax, nights}) => acc + (nights * this.calculateRoonType(roomType)) + this.calculateExtraPerson(pax , nights), 0);
    };
    
    calculateTotal(){
        this._total = this.subtotal + (this.subtotal * 0.21);
    }

    get subtotal() {
        return this._subtotal;
    }

    get total() {
        return this._total;
    }

    set bookings(booking){
        this._bookings = booking;
        this.calculateSubtotal();
        this.calculateTotal();
    }
}


class PrivateHotelBookings extends generalHotelBookings{
    constructor(suite, standard){
        super(suite, standard);
    }

    calculateRoonType(type){
        const roomType = {
            standard: this.standard,
            suite: this.suite
        };
        return roomType[type];
    };

    calculateSubtotal(){
        this._subtotal = bookings.reduce((acc, {roomType, pax, nights}) => acc + (nights * this.calculateRoonType(roomType)) + this.calculateExtraPerson(pax , nights), 0);
    };
}

class TourOperatorHotelBookings extends generalHotelBookings{
    constructor(suite, standard){
        super(suite, standard);
    }

    calculateRoonType(type){
        const roomType = {
            standard: this.standard,
            suite: this.suite
        };
        return roomType[type];
    };

    calculateSubtotal(){
        this._subtotal = bookings.reduce((acc, {roomType, pax, nights}) => acc + (nights * this.calculateRoonType(roomType)) + this.calculateExtraPerson(pax , nights), 0);
    };

    calculateTotal(){
        this._total = (this.subtotal + (this.subtotal * 0.21));
        this._total = this._total - (this._total * 0.15);
    }
}

const privateBooking = new PrivateHotelBookings(150, 100);
privateBooking.bookings = bookings;
console.log("Subtotal Private Hotel Bookings: " + privateBooking.subtotal + "€");
console.log("Total Private Hotel Bookings: " + privateBooking.total+ "€");

console.log("=====================");

const TourOperatorooking = new TourOperatorHotelBookings(100, 100);
TourOperatorooking.bookings = bookings;
console.log("Subtotal Tour Operator Hotel Bookings: " + TourOperatorooking.subtotal + "€");
console.log("Total Tour Operator Hotel Bookings: " + TourOperatorooking.total+ "€");




