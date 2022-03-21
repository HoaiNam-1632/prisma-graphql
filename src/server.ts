import { resolvers } from './resolvers'
import { typeDefs } from './typeDefs'
const { getUserId } = require("./ulitis/ultis")
import { prisma } from '@prisma/client'
import { ApolloServer } from 'apollo-server'

const PORT = 4000
new ApolloServer(
  { 
    resolvers, 
    typeDefs,  
    context: ({ req }) => {
  return {
      ...req,
      prisma,
      userId:
          req && req.headers.authorization
              ? getUserId(req)
              : null
  };
},}).listen(
    { port: PORT },
    () =>
      console.log(`
  🚀 Server ready at: http://localhost:${PORT}
  ⭐️ See sample queries: http://pris.ly/e/ts/graphql-sdl-first#using-the-graphql-api`),
  )

