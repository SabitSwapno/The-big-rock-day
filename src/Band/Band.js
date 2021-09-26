import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import './Band.css'

const Band = (props) => {
    const { name, members, charge, genre, location, image } = props.band;
    const element = <FontAwesomeIcon icon={faShoppingCart} />
    return (
        <div className='single-band col-3'>
            <img className='img-fluid' src={image} alt="" />
            <h3>{name}</h3>
            <h6>Band Members: <span className='fw-bolder'></span>{members}</h6>
            <h6>Origin: <span className='fw-bolder'>{location}</span></h6>
            <h6><span className='fw-bolder'>{genre}</span> Band</h6>
            <h5> Hire Band with <span className='fw-bolder'>{charge}</span>৳</h5>
            <button onClick={() => props.handleAddToCart(props.band)} className='color-btn'> {element} Add to cart</button>
        </div>
    );
};

export default Band;