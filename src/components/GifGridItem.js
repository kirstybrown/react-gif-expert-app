import React from 'react';
import PropTypes from 'prop-types';

const GifGridItem = ( { title, url } ) => {

  return (
        <div className='card animate__animated animate__rubberBand'>
            <img src={ url } alt={ title } />
            <p> { title } </p>
        </div>
    );
};

GifGridItem.propTypes = {
    url: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired
}

export default GifGridItem;
