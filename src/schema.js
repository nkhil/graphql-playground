const { gql } = require('apollo-server')

module.exports = gql`

  type Query {
    allHolidays: [BankHoliday!]!
  }

  type BankHoliday {
    title: String!
    date: String!
  }
`
