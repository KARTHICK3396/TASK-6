class uberPriceCalculator {
  constructor(distanceInKm) {
    this.distanceInKm = distanceInKm;
  }

  calculatePrice() {
    const baseFare = 3.0;
    const distanceRate = 2.0
    const minimumFare = 8.5;
    
    let fare = baseFare + this.distanceInKm * distanceRate;
    fare = Math.max(fare, minimumFare);
    return fare.toFixed(2);
  }
}

const distance = 10;
const calculator = new uberPriceCalculator(distance);
const price = calculator.calculatePrice();

console.log(`Estimated Price for ${distance} km ride: $${price}`);