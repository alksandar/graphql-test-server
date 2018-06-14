// import garage from './Mutation/garage'

const { Query } = require('./Query')
const { Subscription } = require('./Subscription')
const { auth } = require('./Mutation/auth')
const { post } = require('./Mutation/post')
const { AuthPayload } = require('./AuthPayload')
const { garage } = require('./Mutation/garage');
const { test } = require('./Mutation/testMutation');

module.exports = {
  Query,
  Mutation: {
      ...auth,
      ...post,
      ...garage,
      ...test
  },
  Subscription,
  AuthPayload,
}
