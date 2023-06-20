import { expect, describe, it, beforeAll } from '@jest/globals'
import Numbers from '../api/numbers'
import FactsHelper from './helpers/facts'
import jsonAssertion from 'soft-assert'
import 'dotenv/config'

const baseUrl = process.env.NUMBERS_API_URL
const numbersApi = new Numbers(baseUrl)
const factsHelper = new FactsHelper(numbersApi)

describe('Verify "/:year/year" endpoint', () => {
  let facts
  beforeAll(async () => {
    facts = await factsHelper.collectRandomYearsFactsForLimitedCalls(100)
    facts = factsHelper.remainOnlyFactsThatHaveYearAndMonth(facts)
  })

  it('Collected facts array is not empty', async () => {
    expect(facts.length).toBeGreaterThan(0)
  })

  it('Collected facts array is empty if month and year do not present in wording', async () => {
    let facts = [await factsHelper.collectFactForYear(1)]
    facts = factsHelper.remainOnlyFactsThatHaveYearAndMonth(facts)
    expect(facts).toHaveLength(0)
  })

  it('Collected facts array length > 5', async () => {
    expect(facts.length).toBeGreaterThan(5)
  })

  it('All the collected facts wordings have length > 10', async () => {
    facts.forEach((wording) => {
      jsonAssertion.softAssert(
        wording.length > 10,
        true,
        `Fact wording length to be > 10 for wording: ${wording}`
      )
    })
    jsonAssertion.softAssertAll()
  })
})
