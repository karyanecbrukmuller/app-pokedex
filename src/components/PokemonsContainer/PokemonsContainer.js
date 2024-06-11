import React from 'react';
import './PokemonsContainer.css';
import PokemonCard from './PokemonCard/PokemonCard';

// Lista de Pokémon
const listPokemon = [
    {'id_pokemon' : '001', 'name_pokemon' : 'Dewgong', 'poke_type' : 'water', 'image_pokemon' : '/images/PokemonImage/dewgong.svg'},
    {'id_pokemon' : '002', 'name_pokemon' : 'Bulbasaur', 'poke_type' : 'grass', 'image_pokemon' : '/images/PokemonImage/bulbasaur.svg'},
    {'id_pokemon' : '003', 'name_pokemon' : 'Pikachu', 'poke_type' : 'electric', 'image_pokemon' : '/images/PokemonImage/pikachu.svg'}
];

const PokemonsContainer = () => {
    return (
        <div className='pokemons-container'>
            {listPokemon.map((pokemon, index) => (
                <PokemonCard key={index} {...pokemon} />
            ))}
        </div>
    );
};

export default PokemonsContainer;
