import RandomYear from './randomYear.js'

class Random {
  #randomYearInstance

  constructor(baseUrl) {
    this.baseUrl = baseUrl
  }

  /**
   * Returns an instance of supported operations available for random year fetch 
   * @returns {RandomYear}
   */
  year() {
    if (!this.#randomYearInstance) {
      this.#randomYearInstance = new RandomYear(this.baseUrl)
    }
    return this.#randomYearInstance
  }
}
export default Random
