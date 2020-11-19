
import LIST_EMPLOYEE from '../queries/ListEmployees';
import { useQuery } from '@apollo/client';
import { ApolloProvider } from 'react-apollo';

const ListOfEmployees = () => {

    const {loading, error, data } = useQuery(LIST_EMPLOYEE);
    return (
        <div>


             <p>
                {console.log(data.listEmployees.items)}
            </p>
        </div>
           
    )
    // const { loading, error, data } = useQuery(LIST_EMPLOYEE);

    // if (loading) return <div>Loading...</div>;
    // if (error) return <div>Error!</div>;

    // return (
    //     //<TableBody>
    //          <p>
    //              {console.log(data.listEmployees.items)}
    //          </p>

       

    //             // <TableRow key={row.id}>
    //             //     <TableCell component="th" scope="row">
    //             //         {row.id}
    //             //         </TableCell>
    //             //          <TableCell align>{row.id}</TableCell>
    //             //         <TableCell align>{row.firstname}</TableCell>
    //             //         <TableCell align>{row.lastname}</TableCell>
    //             //         {/* <TableCell align onClick={() => this.editUser(row.id)}>Edit</TableCell>
    //             //         <TableCell align onClick={() => this.deleteUser(row.id)}>Delete</TableCell> */}
    //             // </TableRow>    
    //     //</TableBody>
    // )
}

export default ListOfEmployees;