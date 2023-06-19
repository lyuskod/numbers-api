import 'dotenv/config'
import Random from './random/random.js'

class NumbersAPI {
  #randomInstance
  _baseUrl

  constructor(baseUrl = process.env.NUMBERS_API_URL) {
    this._baseUrl = baseUrl
  }

  /**
   * Returns an instance of supported request data available for random fetch 
   * @returns {Random}
   */
  random() {
    if (!this.#randomInstance) {
      this.#randomInstance = new Random(this._baseUrl)
    }
    return this.#randomInstance
  }
}
export default NumbersAPI
