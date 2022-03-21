import userTypeDefs from './userTypeDefs'
import postTypeDefs from './postTypeDefs'
import exampleTypeDefs from './exampleTypeDefs'
import { gql } from 'apollo-server-express'

const baseTypeDefs = gql`
  type Query
`
const typeDefs = [baseTypeDefs, userTypeDefs, 
                  postTypeDefs, exampleTypeDefs]

export { typeDefs }