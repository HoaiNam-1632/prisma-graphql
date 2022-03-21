import { gql } from 'apollo-server'

export default gql`
  

  type Example{
   sayHi: String
  }

  type Query {
   example: Example
  }
`