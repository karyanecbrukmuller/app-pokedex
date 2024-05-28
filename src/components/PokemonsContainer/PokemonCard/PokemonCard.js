import React from 'react';
import './PokemonCard.css';


const PokemonCard = ({idpokemon, namepokemon, poketype, poketype2, imglist, imglist2, imgpokemon}) => {
    return (
        <div className={`pokemon-card ${poketype}`}>
            <div className='pokemon-info'>
                <span className='id-number'>#{idpokemon}</span>
                <span className='pokemon-name'>{namepokemon}</span>
                <div className='types'>
                    <div className={`${poketype}`}>
                        <img src={`${imglist}`} alt='' />
                        <span className='type-name'>{poketype}</span>
                    </div>
                    <div className={`${poketype2}`}>
                        <img src={`${imglist2}`} alt='' />
                        <span className='type-name'>{poketype2}</span>
                    </div>
                </div>
            </div>
            <div className="pokemon-bg">
            </div>
            <img className='pokemon-image' src={imgpokemon} alt='Imagem do Pokemon'></img>
        </div>
    );
};

export default PokemonCard;