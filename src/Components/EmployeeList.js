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