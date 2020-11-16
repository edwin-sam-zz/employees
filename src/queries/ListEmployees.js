import gql from 'graphql-tag'

export default gql`
  query listEmployees {
    listEmployees  {
      items {
        id
        firstName
        lastName
        skills
      }
    }
  }
`