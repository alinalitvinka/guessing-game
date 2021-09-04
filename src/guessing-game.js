class GuessingGame {
    constructor() {}

    setRange(min, max) {
      this.minValue = min;
      this.maxValue = max;
    }

    guess() {
      this.guessValue = Math.round((this.maxValue + this.minValue)/2);
      return this.guessValue;
    }

    lower() {
      return this.setRange(this.minValue, this.guessValue);
    }

    greater() {
      return this.setRange(this.guessValue, this.maxValue);
    }
}

module.exports = GuessingGame;
