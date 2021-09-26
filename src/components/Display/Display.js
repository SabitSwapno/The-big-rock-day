import React, { useEffect, useState } from 'react';
import Band from '../../Band/Band';
import Cart from '../Cart/Cart';
import './Display.css';

const Display = () => {
    const [bands, setBands] = useState([]);
    const [cart, setCart] = useState([]);

    useEffect(() => {
        fetch('./bandsData.JSON')
            .then(res => res.json())
            .then(data => setBands(data))
    }, [])

    const handleAddToCart = (band) => {
        const newCart = [...cart, band];
        setCart(newCart);
    }

    return (
        <div className='display-container pt-3 bg-image'>
            <div className='bands-container'>
                <h2 className='text-center text-white'>Available Bands</h2>
                <h3 className='text-center ht-color fw-bolder'>Hire Them below</h3>
                <div className='row justify-content-center'>
                    {
                        bands.map(band => <Band
                            key={band.name}
                            band={band}
                            handleAddToCart={handleAddToCart}
                        ></Band>)
                    }
                </div>
            </div>
            <div className='cart-container'>
                <Cart cart={cart}></Cart>
            </div>
        </div>
    );
};

export default Display;