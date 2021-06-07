import React from 'react';
import PropTypes from 'prop-types';

export const GifGridItem = ( { id, url, title } ) => {

    console.log( id, url, title )
    return (
        <div className="card animate__animated animate__fadeIn">
            <img src={url} alt={ title } />
            <p>{ title }</p>
        </div>
    )
}

GifGridItem.propsTypes = {
    id: PropTypes.string.isRequired,
    url: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired
}
