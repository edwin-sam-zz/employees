import React from 'react';
import Header from './Components/header'
import AddEmployee from './AddEmployee';
import ListOfEmployees from './Components/ListOfEmployees';

const App = () => {
    return (
        <div>
            <Header />
            {/* <EmployeeList /> */}
            <AddEmployee />
            <ListOfEmployees />
            
        </div>
    );
}

export default App;