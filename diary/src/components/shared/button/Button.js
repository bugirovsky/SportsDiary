import React from 'react';
import './Button.css';

const Button = ({onClick}) => {
    return (
        <>
            <button className="btn_icon" onClick={onClick}>Запись</button>
        </>
    );
};

export default Button;