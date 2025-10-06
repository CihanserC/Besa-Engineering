import React from 'react';
import './Button.css'; // Assuming you have a CSS file for button styles

const Button = ({ children, onClick, type = 'button', className = '' }) => {
    return (
        <button type={type} onClick={onClick} className={`btn ${className}`}>
            {children}
        </button>
    );
};

export default Button;