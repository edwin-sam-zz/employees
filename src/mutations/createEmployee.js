import gql from 'graphql-tag'



const CREATE_EMPLOYEE = gql` 
  mutation createEmployee ($firstname: String!, $lastname: String!)
   {
    createEmployee(input: {firstname: $firstname, lastname: $lastname}) {
        id
      firstname
      lastname
    }
}
`;
export default CREATE_EMPLOYEE;