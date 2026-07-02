import PropTypes from 'prop-types'
import React from 'react'

List.propTypes = {
    items: PropTypes.array,
    category: PropTypes.string
}

function List({ items, category }) {

    const listItems = items.map((item) => <li key={item.id}>{item.name} (<b>{item.calories} cal</b>)</li>)
    return (
        <div>
            <h2>{category}</h2>
            <ol>{listItems}</ol>
        </div>
    )
}


export default List
