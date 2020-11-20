import React, { Component } from 'react'
import EmployeeForm from './employeeForm'
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Button from '@material-ui/core/Button';
import '../index.css';

class EmployeeList extends Component {
     constructor(props) {
        super(props)
        this.state = {
            employees: [],
            visible: false,
            title: 'Add Employee'
        }
        // this.deleteEmployee = this.deleteEmployee.bind(this);
        // this.editEmployee = this.editEmployee.bind(this);
        // this.addEmployee = this.addEmployee.bind(this);
    }

    render(){
        const renderForm = this.state.visible ? ( <EmployeeForm /> ) : null;
        const buttonText = this.state.title ? 'Add Employee' : 'Submit'

        return (
            <div>
                {renderForm}
                <Button variant="contained" color="primary" className="addEmpButton"
                onClick={() => this.setState({visible: !this.state.visible, title: !this.state.title})} >
                    {buttonText}
                </Button>

                <Table>
                    <TableHead>
                        <TableRow>
                            <TableCell>Id</TableCell>
                            <TableCell>First Name</TableCell>
                            <TableCell>Last Name</TableCell>
                        </TableRow>
                    </TableHead>

                    <TableBody>
                        {this.state.employees.map(row => (
                            <TableRow key={row.id}>
                                <TableCell component="th" scope="row">
                                    {row.id}
                                </TableCell>
                                <TableCell align>{row.id}</TableCell>
                                <TableCell align>{row.firstName}</TableCell>
                                <TableCell align>{row.lastName}</TableCell>
                                <TableCell align onClick={() => this.editUser(row.id)}>Edit</TableCell>
                                <TableCell align onClick={() => this.deleteUser(row.id)}>Delete</TableCell>

                            </TableRow>
                        ))}
                    </TableBody>
                </Table>

            </div>
        )
    }
    
}

export default EmployeeList;














// import { graphql, Query } from 'react-apollo'
// import { Mutation } from 'react-apollo'
// import gql from 'graphql-tag'
// import React, { Component } from 'react'
// import Table from '@material-ui/core/Table';    
// import TableCell from '@material-ui/core/TableCell';
// import TableHead from '@material-ui/core/TableHead';
// import TableRow from '@material-ui/core/TableRow';
// import Button from '@material-ui/core/Button';
// import { FormControl, TableBody } from '@material-ui/core';
// import { TextField } from '@material-ui/core';
// import { useMutation, useQuery } from '@apollo/client';
// import CREATE_EMPLOYEE from './mutations/createEmployee'
// import LIST_EMPLOYEE from './queries/ListEmployees'

// import './index.css';

// class AddEmployee extends React.Component { 
//     constructor(props) {
//         super(props)
//             this.state = {
//                 id: '',
//                 firstName: '',
//                 lastName: '',
//                 skills: [],
//                 visible: false,
//                 title: 'Add Employee',
//             }
//     }

//   clearForm = () => {
//     this.setState({
//       firstName: '',
//       lastName: ''
//     })
//   }

//   addSkills = () => {
//     if (this.state.skills === '') return
//     const skills = this.state.skills
//     skills.push(this.state.skilss)
//     this.setState({
//       skills,
//       skills: ''
//     })
//   }  

//    submitButtonClicked = () => {
//         if (this.state.visible) {
//             console.log(this.state.firstName)
//             console.log(this.state.lastName)
//         }
//     }

//     EmployeeForm = () => {

//     return (
//         <FormControl className="forms">
//             <TextField id="standard-basic" label="First Name" value={this.state.firstName} onChange={evt => this.onChange('firstName', evt.target.value)} />
//             <TextField id="standard-basic" label="Last Name" value={this.state.lastName} onChange={evt => this.onChange('lastName', evt.target.value)}/>
//             <Mutation mutation={CREATE_EMPLOYEE} variables={{firstname: this.state.firstName, lastname: this.state.lastName}}>
//                 {postMutation => <Button variant="contained" color="primary" 
//                     onClick={() => {
//                         postMutation();
//                         this.submitButtonClicked();
//                         this.clearForm();
//                     }}>
//                 Submit
//                 </Button>}
//             </Mutation>
//         </FormControl>
//         )
//     }

//     ListOfEmployees = () => {
//         const { loading, error, data } = useQuery(LIST_EMPLOYEE);

//         if (loading) return 'Loading...';
//         if (error) return `Error! ${error.message}`;

//         return (
//             //<TableBody>
//             <p>
//                 {data.listEmployees.items.map(row => (
                    
//                        <p>
//                         {console.log(row)}
//                        </p> 
//                 ))}
//             </p>

//                     // <TableRow key={row.id}>
//                     //     <TableCell component="th" scope="row">
//                     //         {row.id}
//                     //         </TableCell>
//                     //          <TableCell align>{row.id}</TableCell>
//                     //         <TableCell align>{row.firstname}</TableCell>
//                     //         <TableCell align>{row.lastname}</TableCell>
//                     //         {/* <TableCell align onClick={() => this.editUser(row.id)}>Edit</TableCell>
//                     //         <TableCell align onClick={() => this.deleteUser(row.id)}>Delete</TableCell> */}
//                     // </TableRow>    
//             //</TableBody>
//         )
//     }

//     render(){
//         const renderForm = this.state.visible ? ( <this.EmployeeForm /> ) : null;
//         const buttonText = this.state.title ? 'Add Employee' : 'Back';

//         return (
//             <div>
//                 {renderForm}
//                 <Button variant="contained" color="primary" className="addEmpButton"
//                 onClick={() => this.setState({visible: !this.state.visible, title: !this.state.title})} 
//                 >
//                     {buttonText}
//                 </Button>
                
//                 <Table>
//                     <TableHead>
//                         <TableRow>
//                             <TableCell>Id</TableCell>
//                             <TableCell>First Name</TableCell>
//                             <TableCell>Last Name</TableCell>
//                         </TableRow>
//                     </TableHead>
//                 </Table>

//                 {/* <Query query={LIST_EMPLOYEE}>

//                 </Query> */}
//             </div>
//         )
//     }
// }

// export default AddEmployee;
