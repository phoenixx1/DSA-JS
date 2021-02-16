// Only change code below this line
class Thermostat {
  constructor(tempreatureF) {
    this.temperatureC = (tempreatureF - 32) * (5 / 9);
  }
  get temperature() {
    return this.temperatureC;
  }
  set temperature(updatedTempInC) {
    this.temperatureC = updatedTempInC;
  }
}
// Only change code above this line

const thermos = new Thermostat(76); // Setting in Fahrenheit scale
let temp = thermos.temperature; // 24.44 in Celsius
thermos.temperature = 26;
temp = thermos.temperature; // 26 in Celsius
