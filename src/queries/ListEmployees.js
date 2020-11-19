import gql from 'graphql-tag'

const LIST_EMPLOYEE = gql`
      query listEmployees {
        listEmployees {
            items {
                id
                firstname
                lastname
            }
        }
    }
    `

export default LIST_EMPLOYEE;