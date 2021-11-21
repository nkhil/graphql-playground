module.exports = {
  Query: {
    allHolidays: async (parent, args, { dataSources }, info) => {
      const data = await dataSources.bankHolidaysAPI.getBankHolidays()
      const dates = data['england-and-wales'].events
      return dates.map(d => ({
        title: d.title,
        date: d.date,
      }))
    }
  },
}
