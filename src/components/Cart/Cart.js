import React from 'react';
import "./Cart.css"

const Cart = (props) => {
    const { cart } = props;
    let total = 0;
    for (const band of cart) {
        total = total + band.charge
    }
    return (
        <div>
            <h2 className='text-white'><span className='text-white'>Hired Bands</span> Cart</h2>
            <h4 className='span-text'>Bands Hired: <span className='fw-bolder'>{props.cart.length}</span></h4>
            <br />
            <h4 className='span-text'>Total Cost : <span className='fw-bolder'> {total}</span></h4>
            <ul className='text-white fs-4 fw-bolder'>
                {
                    cart.map(band => <li key={band.name}>
                        {band.name}
                    </li>)
                }
            </ul>
        </div>
    );
};

export default Cart;