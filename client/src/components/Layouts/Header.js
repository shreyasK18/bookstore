import React from 'react'
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types'

const Header = props => {
    return (
       <header>
            <h1>Book Store</h1>
            {/* <Link to="/login">Login</Link> */}
       </header>

    )
}

Header.propTypes = {

}

export default Header
