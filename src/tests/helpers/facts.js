import NumbersApi from '../../api/numbers.js'
import NumberHelper from './number.js'
import RegExpHelper from './regexp.js'
import { YEAR_FACT_REGEXPS } from '../constants/regexps.js'

class FactsHelper {
  #apiInstance
  #MIN_YEAR
  #MAX_YEAR
  /**
   * @param {NumbersApi} apiInstance Initialized numbers api instance
   */
  constructor(apiInstance) {
    this.#apiInstance = apiInstance
    this.#MIN_YEAR = 1000
    this.#MAX_YEAR = 2023
  }

  /**
   * Filters collected facts array. Remains only the values that have month & year data within in one wording
   * @param {string[]} factsArray - Facts array
   * @returns {string[]} Filtered facts array
   */
  remainOnlyFactsThatHaveYearAndMonth(factsArray) {
    return factsArray.filter((factWording) => {
      const year = RegExpHelper.extractValueByPattern(
        factWording,
        YEAR_FACT_REGEXPS.YEAR_VALUE,
        1
      )
      const month = RegExpHelper.extractValueByPattern(
        factWording,
        YEAR_FACT_REGEXPS.MONTH_VALUE,
        1
      )
      return year && month
    })
  }

  /**
   * Collects year facts by providing random year value for each call
   * @param {number} callsCount - Request count to perform
   * @param {number} minYear - Min year in a range
   * @param {number} maxYear - Max year in a range
   * @returns {Promise<string[]>} Collected facts
   */
  async collectRandomYearsFactsForLimitedCalls(
    callsCount,
    minYear = this.#MIN_YEAR,
    maxYear = this.#MAX_YEAR
  ) {
    const facts = []
    for (let counter = 0; counter < callsCount; counter++) {
      const year = NumberHelper.generateRandomNumberInRange(minYear, maxYear)
      const fact = await this.collectFactForYear(year)
      facts.push(fact)
    }
    return facts
  }

  async collectFactForYear(year) {
    return (await this.#apiInstance.year().getByValue(year)).text()
  }
}
export default FactsHelper
