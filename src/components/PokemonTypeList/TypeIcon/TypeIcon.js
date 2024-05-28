import React from 'react';
import './TypeIcon.css';


const TypeIcon = ({ type,alt,image }) => {  

    return (
        <a className={type} href='/'>
            <img src={`./images/PokemonTypeList/${image}`} alt={alt} />
        </a>
    );
};


export default TypeIcon;