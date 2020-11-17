import gql from 'graphql-tag'

const CREATE_EMPLOYEE = gql` 
  mutation createEmployee (
      $firstName: String!,
      $lastName: String!
    ) {
    createEmployee(input: {
      firstName: $firstName, lastName: $lastName,
    }) {
        id
      firstName
      lastName
      skills
    }
}
`
export default CREATE_EMPLOYEE;