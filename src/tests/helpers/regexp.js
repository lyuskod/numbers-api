class RegExpHelper {
  /**
   * Extract value from string by pattern
   * @param {string} str - String value to extract from
   * @param {string | RegExp} pattern - Pattern
   * @param {number} group - Optional value to extract group
   * @returns {string} Extracted value
   */
  static extractValueByPattern(str, pattern, group) {
    let result = null
    try {
      result = new RegExp(pattern).exec(str)
      return group ? result[group] : result
    } catch (e) {}
    return result
  }
}
export default RegExpHelper
