import gql from 'graphql-tag'

const LIST_EMPLOYEE = gql`
    query listEmployees {
        listEmployees {
            items {
                id
                firstname
                lastname
                skills
            }
        }
    }
`

export default LIST_EMPLOYEE;