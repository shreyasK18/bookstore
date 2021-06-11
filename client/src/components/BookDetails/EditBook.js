import React from 'react'
import PropTypes from 'prop-types'

const EditBook = props => {
    return (
        <section>
        <table>
            <tbody>
                <tr>
                    <th>Name</th>
                    <th>Author</th>
                    <th>Price</th>
                    <th>In Stock</th>
                    <th>No. of Copy Bought</th>
                    <th>Bought Date</th>
                </tr>
                <tr>
                    <td>Name</td>
                    <td>Author</td>
                    <td>Price</td>
                    <td><input type="number" min="0" max="1000"/></td>
                    <td>No. of Copy Bought</td>
                    <td>Bought Date</td>
                    <td><button className="save">Save</button></td>

                    <td><button className="delete">Delete</button></td>
                </tr>
                
            </tbody>
        </table>
    </section>
    )
}

EditBook.propTypes = {

}

export default EditBook
