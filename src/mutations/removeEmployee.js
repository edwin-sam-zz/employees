import gql from 'graphql-tag';

const REMOVE_EMPLOYEE = gql `
    mutation deleteEmployee ($id: String!) {
        deleteEmployee(input: {id: $id}) {
            id
        }
    }
`
export default REMOVE_EMPLOYEE;