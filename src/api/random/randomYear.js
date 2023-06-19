class RandomYear {
  constructor(baseUrl) {
    this.baseUrl = baseUrl
    this.route = 'random/year'
  }
  /**
   * Fetch an information for random year
   * @returns {Promise<Response>}
   */
  async get() {
    return fetch(`${this.baseUrl}/${this.route}`)
  }
}
export default RandomYear
