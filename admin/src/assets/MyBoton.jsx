import React from 'react'
import { Link } from 'react-router-dom'

const MyBoton = ({ className, text, linkTo, children }) => {

    const buttonContent = linkTo ? (
      <Link to={linkTo} className={className}>
        {text}
        {children}
      </Link>
    ) : (
      <button className={className}>
      {text}
      {children}
    </button>
    );
  
    return buttonContent;
  };
  
  export default MyBoton;