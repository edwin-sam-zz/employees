import React, { useState } from 'react';
import { Mutation } from 'react-apollo';
import Table from '@material-ui/core/Table';    
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Button from '@material-ui/core/Button';
import { FormControl } from '@material-ui/core';
import { TextField } from '@material-ui/core';
import CREATE_EMPLOYEE from './mutations/createEmployee'
import ListOfEmployees from './Components/ListOfEmployees';
import client from './index'
import gql from 'graphql-tag'
import LIST_EMPLOYEE from './Components/ListOfEmployees'

import './index.css';

const EmployeeForm = () => {

    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [skills, setSkills] = useState([]);

    const clearForm = () => {
        setFirstName('');
        setLastName('');
    }

    const submitButtonClicked = () => {
            console.log(firstName);
            console.log(lastName);
    }

return (
        <FormControl className="forms">
            <TextField id="standard-basic" label="First Name" value={firstName} onChange={evt => setFirstName(evt.target.value)} />
            <TextField id="standard-basic" label="Last Name" value={lastName} onChange={evt => setLastName(evt.target.value)}/>

            <Mutation mutation={CREATE_EMPLOYEE} variables={{firstname: firstName, lastname: lastName}} refetchQueries={[{query: gql`query listEmployees {
                        listEmployees {
                            items {
                                id
                                firstname
                                lastname
                            }
                        }
                    }
                    `}]}>
                    {postMutation => <Button variant="contained" color="primary" 
                        onClick={() => {
                            postMutation();
                            submitButtonClicked();
                            clearForm();
                        }}>
                    Submit
                    </Button>}
                    </Mutation>
             </FormControl>
        )
}

const AddEmployee = () => { 

    const [visible, setVisible] = useState(false);
    const [title, setTitle] = useState('Add Employee');

    const renderForm = visible ? <EmployeeForm /> : null;
    const buttonText = title;

    const clickButton = () => {
        setVisible(<EmployeeForm />);
        setTitle('Back')
    }    

    return (
        <div>
            {renderForm}
            <Button variant="contained" color="primary" className="addEmpButton"
            onClick={() => clickButton()} 
            >
                {buttonText}
            </Button>
            <p>
            </p>
            <Table>
                <TableHead>
                    <TableRow>
                        <TableCell component="th" scope="row">Id</TableCell>
                        <TableCell align="center">First Name</TableCell>
                        <TableCell align="right">Last Name</TableCell>
                    </TableRow>
                </TableHead>

                <ListOfEmployees />

            </Table>

        </div>
    )
}
         
export default AddEmployee;