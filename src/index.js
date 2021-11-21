const { ApolloServer } = require('apollo-server')
const typeDefs = require('./schema')
const logger = require('pino')()
const resolvers = require('./resolvers')
const BankHolidaysAPI = require('./data-sources/bank-holidays')

const server = new ApolloServer({
  typeDefs,
  resolvers,
  dataSources: () => ({
    bankHolidaysAPI: new BankHolidaysAPI(),
  })
})

server.listen().then(() => {
  logger.info(`
    🚀  Server is running!
    🔉  Listening on port 4000
    📭  Query at https://studio.apollographql.com/dev
  `)
})
