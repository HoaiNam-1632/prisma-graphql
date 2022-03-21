import { gql } from 'apollo-server'

export default gql`
  type Mutation {
    signUpUser(data: UserCreateInput!): AuthPayload!
  }

  type Query {
    allUsers: [User!]!
    signIn(email: String!, password: String!): AuthPayload!
    me: User!
  }

  type User {
    email: String!
    id: Int!
    name: String
    password: String
    posts: [Post]
  }
  type AuthPayload {
    token: String
    user: User
  }
  input UserCreateInput {
    email: String!
    name: String
    password: String!
  }

  input UserUniqueInput {
    email: String
    id: Int
  }

  scalar DateTime
`

