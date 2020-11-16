import React from 'react';
import Header from './Components/header'
import AddEmployee from './AddEmployee';

const App = () => {
    return (
        <div>
            <Header />
            {/* <EmployeeList /> */}
            <AddEmployee />
        </div>
    );
}

export default App;