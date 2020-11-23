import gql from 'graphql-tag'



const CREATE_EMPLOYEE = gql` 
  mutation createEmployee ($firstname: String!, $lastname: String! $skills: String!)
   {
    createEmployee(input: {firstname: $firstname, lastname: $lastname, skills: $skills}) {
        id
      firstname
      lastname
      skills
    }
}
`;
export default CREATE_EMPLOYEE;