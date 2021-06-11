import React,{ useState} from 'react'
import PropTypes from 'prop-types'
import { gql, useMutation } from '@apollo/client';

const AddBook = props => {

    const ADD_BOOK = gql`
  mutation AddBook($name: String!,$author: String!,$in_stock: Int!,$price:Int!,$rating:Int!) {
    addBook(
        name:$name,
        author:$author,
        in_stock:$in_stock,
        price:$price,
        rating:$rating
    ) {
      id
      name
    }
  }
`;
const [book,setBook]=useState({
    name:"",
        author:"",
        in_stock:0,
        price:0,
        rating:0
});
const [addBook, { data,error }] = useMutation(ADD_BOOK);

const onChange= (e) => setBook({...book,[e.target.name]:e.target.value});
const onSubmit= async(e)=>{
    e.preventDefault();
    console.log(book);
    addBook({ 
        variables: { name: name,author:author,in_stock:in_stock,price:price,rating:rating }
      
    });
    if(error){
        alert(error);
        console.log(data);
    }
    alert("Book Added");
     
}

const {name,author,in_stock,price,rating}=book;
if(error){
    return(
        <pre>Bad: {error.graphQLErrors.map(({ message }, i) => (
            <span key={i}>{message}</span>
          ))}
          </pre>
    )
}
    return (
        
            <section>
                <form onSubmit={e => onSubmit(e)}>
                    <label htmlFor="name">Name</label>
                    <input type="text" name="name" value={name} onChange={ e => onChange(e)} required/>
                    <label htmlFor="author">Author</label>
                    <input type="text" name="author" value={author} onChange={ e => onChange(e)} required/>
                    <label htmlFor="price">Price</label>
                    <input type="number" min="0" max="1000" name="price" value={price} onChange={ e => onChange(e)} required />
                    <label htmlFor="in_stock">In Stock</label>
                    <input type="number" min="0" max="1000" name="in_stock" value={in_stock} onChange={ e => onChange(e)} required />
                    <label htmlFor="rating">Rating</label>
                    <input type="text" name="rating" value={rating} onChange={ e => onChange(e)} required />
                    {/* <label htmlFor="copy_bought">No. copy bought</label> */}
                    {/* <input type="text" name="copy_bought" value={copy_bought} onChange={ e => onChange(e)} required/> */}
                    <button type="submit" className="save" >Submit</button>
                    <button type="cancel" className="delete" >Cancel</button>
                </form>
            </section>
            
        
    )
}

AddBook.propTypes = {

}

export default AddBook
