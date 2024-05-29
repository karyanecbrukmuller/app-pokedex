import React from 'react';
import './PokemonCard.css';
import Poketype from './Poketype/Poketype';


const PokemonCard = ({idpokemon, namepokemon, poketype, imgpokemon}) => {
    return (
        <div className={`pokemon-card ${poketype}`}>
            <div className='pokemon-info'>
                <span className='id-number'>#{idpokemon}</span>
                <span className='pokemon-name'>{namepokemon}</span>
                <div className='types'>
                    <Poketype type={poketype} />
                </div>
            </div>
            <div className="pokemon-bg">
            </div>
            <img className='pokemon-image' src={imgpokemon} alt='Imagem do Pokemon'></img>
        </div>
    );
};

export default PokemonCard;