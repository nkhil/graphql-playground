const { RESTDataSource } = require('apollo-datasource-rest')

class BankHolidaysAPI extends RESTDataSource {
  constructor() {
    super()
    this.baseURL = 'https://www.gov.uk/bank-holidays.json'
  }

  getBankHolidays() {
    return this.get('')
  }
}

module.exports = BankHolidaysAPI
