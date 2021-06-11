import React from 'react'
import PropTypes from 'prop-types'
import { gql, useQuery } from '@apollo/client';
import ListItem from './ListItem';
const ListView = props => {
    const GET_BOOKS = gql`
  query LaunchQuery {
        books{
          id,
          name,
         author
        } 
  }
`;
const { loading, error, data } = useQuery(GET_BOOKS);

if (loading) return <p>Loading...</p>;
if (error) return <p>Error :(</p>;
    return (
        
        <section style={{minHeight:'61.6vh'}}>
        <table>
            <tbody>
                <tr>
                    <th>Name</th>
                    <th>Author</th>
                    <th colSpan="2">Modify</th>
                    
                </tr>
                {data.books.map(book=><ListItem book={book}/>)}
                
            </tbody>
        </table>
    </section>
    )
}

ListView.propTypes = {

}

export default ListView
