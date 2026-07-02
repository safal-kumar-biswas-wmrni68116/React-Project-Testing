import PropTypes from 'prop-types';
import React from 'react'

function Child(props) {

    const welcomeMessage = <h1>Welcome back, {props.name}!</h1>
    const loginMessage = <h1>Please log in, {props.name}!</h1>

    return(props.isLoggedIn ? welcomeMessage : loginMessage)
}

Child.propTypes = {
    isLoggedIn: PropTypes.bool.isRequired,
    name: PropTypes.string.isRequired
}
Child.defaultProps = {
    isLoggedIn: false,
    name: 'Guest'
}

export default Child
