
import LIST_EMPLOYEE from '../queries/ListEmployees';
import { useQuery } from '@apollo/client';
import { Query } from "react-apollo";
import { ApolloProvider } from 'react-apollo';
import Loading from 'react-loading';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Table from '@material-ui/core/Table';

const ListOfEmployees = () => {

    const shortID = (id) => {
        var str = id;
        var sID = str.substring(0, 7);
        return sID;

    }

    return (
        <Query query={LIST_EMPLOYEE}>
        {({ loading, error, data }) => {
          if (loading) return <Loading loading={loading} />;
          if (error) console.log(error);
          return (
            // <p>
            //     {console.log(data.listEmployees.items)}
            // </p>

                <TableBody>
                    {data.listEmployees.items.map(row => (
                        <TableRow key={row.id}>
                            <TableCell component="th" scope="row">
                                {shortID(row.id)}
                            </TableCell>
                            <TableCell align="center">{row.firstname}</TableCell>
                            <TableCell align="right">{row.lastname}</TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            )}
        }
      </Query>
    )
}

export default ListOfEmployees;