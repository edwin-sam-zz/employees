import gql from 'graphql-tag'

export default gql`
  subscription NewEmployeeSub {
    onCreateEmployee {
      id
      firstName
      lastName
      skills
    }
  }
`
