import React from 'react';
import './Header.css';

const Header = () => {
    return (
        <div className="header-style">
            <h1>The <span className="span-color">Big Rock Concert</span> Reg</h1>
            <br />
            <h3 className='fw-bolder'>Watch the biggest Concert festival of the year.</h3>
            <br />
            <h1><span className='span-color'>Total Budget</span> : 6100000</h1>
        </div>
    );
};

export default Header;