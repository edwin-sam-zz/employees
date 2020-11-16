import { graphql } from 'react-apollo'
import React, { Component } from 'react'
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Button from '@material-ui/core/Button';
import { FormControl } from '@material-ui/core';
import { TextField } from '@material-ui/core';

import './index.css';

class AddEmployee extends React.Component { 
    constructor(props) {
        super(props)
            this.state = {
                id: '',
                firstName: '',
                lastName: '',
                skills: [],
                visible: false,
                title: 'Add Employee'
            }
    }

  onChange = (key, value) => {
    this.setState({ [key]: value })
  }

  addSkills = () => {
    if (this.state.skills === '') return
    const skills = this.state.skills
    skills.push(this.state.skilss)
    this.setState({
      skills,
      skills: ''
    })
  }  

  addEmployee = () => {
    const { firstName, lastName, skills } = this.state
        this.props.onAdd({
        firstName,
        lastName,
        skills
        })

        this.setState({
        firstName: '',
        lastName: '',
        skills: []
        })
    }

    EmployeeForm = () => {
    return (
        <FormControl className="forms">
            <TextField id="standard-basic" label="First Name" value={this.state.firstName} onChange={evt => this.onChange('firstName', evt.target.value)} />
            <TextField id="standard-basic" label="Last Name" value={this.state.lastName} onChange={evt => this.onChange('lastName', evt.target.value)}/>
        </FormControl>
        )
    }

    render(){
        const renderForm = this.state.visible ? ( this.EmployeeForm() ) : null;
        const buttonText = this.state.title ? 'Add Employee' : 'Submit'

        return (
            <div>
                {renderForm}
                <Button variant="contained" color="primary" className="addEmpButton"
                onClick={() => this.setState({visible: !this.state.visible, title: !this.state.title})}
                >
                    {buttonText}
                </Button>
                {console.log(this.state.firstName)}
                {console.log(this.state.lastName)}
                <Table>
                    <TableHead>
                        <TableRow>
                            <TableCell>Id</TableCell>
                            <TableCell>First Name</TableCell>
                            <TableCell>Last Name</TableCell>
                        </TableRow>
                    </TableHead>
                </Table>


            </div>
        )
    }
}

// export default graphql(CreateEmployee, {
//     props: props => ({
//         onAdd: employee => props.mutate({
//         variables: employee,
//         optimisticResponse: {
//             __typename: 'Mutation',
//             createEmployee: { ...employee,  __typename: 'Employee' }
//         },
//         update: (proxy, { data: { createEmployee } }) => {
//             const data = proxy.readQuery({ query: ListEmployees });
//             data.listEmployee.items.push(listEmployee);
//             proxy.writeQuery({ query: ListEmployees, data });
//         }
//         })
//     })
//     })(AddEmployee)

export default AddEmployee;