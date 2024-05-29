import React from 'react';
import './Poketype.css';


const Poketype = ({type}) => {
    return (
        <div className={`${type}`}>
            <img src={`/images/PokemonTypeList/${type}.svg`} alt='' />
            <span className='type-name'>{type}</span>
        </div>
    )
}


export default Poketype;