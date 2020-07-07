import './style.css';

import React from 'react';

const FloatInput = ({ ...childProps }) => {
    return (
        <div className="float-input">
            <input {...childProps} type="text" name="fullname" id="fullname" placeholder="John Doe" />
            <label for="fullname">Full name</label>
        </div>
    );
};

export default FloatInput;
