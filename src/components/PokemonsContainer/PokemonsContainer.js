import React from 'react';
import './PokemonsContainer.css';
import PokemonCard from './PokemonCard/PokemonCard';


const PokemonsContainer = () => {
    return (
        <div className='pokemons-container'>
            <PokemonCard idpokemon="001" namepokemon="Dewgong" poketype="water" imglist="/images/PokemonTypeList/water.svg" poketype2="ice" imglist2="/images/PokemonTypeList/ice.svg" imgpokemon="/images/PokemonImage/dewgong.svg" />
            <PokemonCard idpokemon="002" namepokemon="Bulbasaur" poketype="grass" imglist="/images/PokemonTypeList/grass.svg" poketype2="poison" imglist2="/images/PokemonTypeList/poison.svg" imgpokemon="/images/PokemonImage/bulbasaur.svg" />
            <PokemonCard idpokemon="003" namepokemon="Pikachu" poketype="electric" imglist="/images/PokemonTypeList/electric.svg" poketype2="" imgpokemon="/images/PokemonImage/pikachu.svg" />
        </div>
    );
};

export default PokemonsContainer;
