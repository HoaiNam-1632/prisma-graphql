// import userResolver from './userResolvers'
import userQueries from './query/userQueries'
import userMutation from './mutation/userMutation'
import postMutation from './mutation/postMutation'
import postQueries from './query/postQueries'

import exampleQueries from './query/exampleQueries'
// import _ from 'lodash'
const resolvers =  [userQueries, userMutation, 
                    postMutation, postQueries
                    ,exampleQueries]

export  { resolvers }