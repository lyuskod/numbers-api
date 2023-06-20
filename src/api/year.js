class YearApi {
  constructor(baseUrl) {
    this.baseUrl = baseUrl
  }
  /**
   * Fetchs an information fact for requested year
   * @param {number} year - Year to request fact for
   * @returns {Promise<Response>} Reponse
   */
  async getByValue(year) {
    return fetch(`${this.baseUrl}/${year}/year`)
  }
}
export default YearApi
