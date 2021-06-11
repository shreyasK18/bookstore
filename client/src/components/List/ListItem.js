import React from 'react'
import PropTypes from 'prop-types'
import{ Link } from 'react-router-dom';
import { gql, useMutation } from '@apollo/client';
const ListItem = ({book:{name,author,id}}) => {
    const DELETE_BOOK = gql`
  mutation ($id: String!) {
    deleteBook(id: $id) {
      id,
      name
    }
  }
`;
const [deleteBook, { data, loading: deleting, error: deleteError }] = useMutation(DELETE_BOOK);

    // const delete_book=(id)=>{
    //     deleteBook(({
    //         variables:{id:id}
    //     }));
    
    //     if(data){
    //         alert("Book Deleted!!");
    //     }
    // }
    return (
        <tr>
           <td>{name}</td>
            <td>{author}</td>
           <td><Link className="edit" to={'/edit/'+id}>Edit</Link></td>
           <td><button className="delete" >Delete</button></td>          

           {/* <td><button className="delete" onClick={delete_book(id)} >Delete</button></td>           */}
      </tr>
    )
}

ListItem.propTypes = {

}

export default ListItem;
