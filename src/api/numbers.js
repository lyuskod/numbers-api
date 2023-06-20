import YearApi from './year.js'

class NumbersApi {
  #yearInstance
  _baseUrl

  constructor(baseUrl) {
    this._baseUrl = baseUrl
  }

  /**
   * Returns an instance to operate on year api
   * @returns {YearApi} Year api instance
   */
  year() {
    if (!this.#yearInstance) {
      this.#yearInstance = new YearApi(this._baseUrl)
    }
    return this.#yearInstance
  }
}
export default NumbersApi
