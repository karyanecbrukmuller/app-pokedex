import React from 'react';
import './PokemonsContainer.css';
import PokemonCard from './PokemonCard/PokemonCard';


const PokemonsContainer = () => {
    return (
        <div className='pokemons-container'>
            <PokemonCard idpokemon="001" namepokemon="Dewgong" poketype="water" imgpokemon="/images/PokemonImage/dewgong.svg" />
            <PokemonCard idpokemon="002" namepokemon="Bulbasaur" poketype="grass" imgpokemon="/images/PokemonImage/bulbasaur.svg" />
            <PokemonCard idpokemon="003" namepokemon="Pikachu" poketype="electric" imgpokemon="/images/PokemonImage/pikachu.svg" />
        </div>
    );
};

export default PokemonsContainer;
