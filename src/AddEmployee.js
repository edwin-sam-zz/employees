import { Query } from 'react-apollo'
import React, { useState } from 'react';
import { Mutation } from 'react-apollo';
import Table from '@material-ui/core/Table';    
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Button from '@material-ui/core/Button';
import { FormControl, TableBody } from '@material-ui/core';
import { TextField } from '@material-ui/core';
import { useMutation, useQuery } from 'react-apollo';
import CREATE_EMPLOYEE from './mutations/createEmployee'
import LIST_EMPLOYEE from './queries/ListEmployees'

import './index.css';

const EmployeeForm = () => {

    const [id, setID] = useState('');
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
            <Mutation mutation={CREATE_EMPLOYEE} variables={{firstname: firstName, lastname: lastName}}>
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
    const [title, setTitle] = useState('Add Emmployee');

    const renderForm = visible ? ( <EmployeeForm /> ) : null;
    const buttonText = title ? 'Add Employee' : setTitle('Back');

    const clickButton = () => {
        setVisible(true);
        setTitle('Back');
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
                        <TableCell>Id</TableCell>
                        <TableCell>First Name</TableCell>
                        <TableCell>Last Name</TableCell>
                    </TableRow>
                </TableHead>
            </Table>

            {/* <Query query={LIST_EMPLOYEE}>

            </Query> */}



        </div>
    )
}
         
export default AddEmployee;