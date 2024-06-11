import React from 'react';
import './PokemonCard.css';
import Poketype from './Poketype/Poketype';


const PokemonCard = ({id_pokemon, name_pokemon, poke_type, image_pokemon}) => {

    const handlecard = (id) => {
        window.location.href='/pokemon/details/' + id;
    }
    
    return (
        <div className={`pokemon-card ${poke_type}`} onClick={() => handlecard(id_pokemon)}>
            <div className='pokemon-info'>
                <span className='id-number'>#{id_pokemon}</span>
                <span className='pokemon-name'>{name_pokemon}</span>
                <div className='types'>
                    <Poketype type={poke_type} />
                </div>
            </div>
            <div className="pokemon-bg">
            </div>
            <img className='pokemon-image' src={image_pokemon} alt='Imagem do Pokemon'></img>
        </div>
    );

    
};

export default PokemonCard;