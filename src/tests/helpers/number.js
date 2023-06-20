class NumberHelper {
  /**
   * Generates random number in range between min & max
   * @param {number} min - Min range to use (Included)
   * @param {number} max - Max range to use (Included)
   * @returns {number} Generated number
   */
  static generateRandomNumberInRange(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min
  }
}
export default NumberHelper
