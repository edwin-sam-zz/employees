import gql from 'graphql-tag'

export default gql` 
  mutation createEmployee (
      $firstName: String!,
      $lastName: String!,
    ) {
    createEmployee(input: $input, condition: $condition){
        id
      firstName
      lastName
      skills
    }
}
`