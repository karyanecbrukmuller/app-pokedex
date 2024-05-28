import React from 'react';
import './PokemonTypeList.css';
import TypeIcon from './TypeIcon/TypeIcon';

// Lista de tipos de Pokémon
const pokemonTypes = [
    {'type' : 'fairy', 'alt' : 'Fairy', 'image' : 'fairy.svg'}, 
    {'type' : 'dark', 'alt' : 'Dark', 'image' : 'dark.svg'},
    {'type' : 'dragon', 'alt' : 'Dragon', 'image' : 'dragon.svg'},
    {'type' : 'ice', 'alt' : 'Ice', 'image' : 'ice.svg'},
    {'type' : 'psychic', 'alt' : 'Psychic', 'image' : 'psychic.svg'},
    {'type' : 'electric', 'alt' : 'Electric', 'image' : 'electric.svg'},
    {'type' : 'grass', 'alt' : 'Grass', 'image' : 'grass.svg'},
    {'type' : 'water', 'alt' : 'Water', 'image' : 'water.svg'},
    {'type' : 'fire', 'alt' : 'Fire', 'image' : 'fire.svg'},
    {'type' : 'steel', 'alt' : 'steel', 'image' : 'steel.svg'},
    {'type' : 'bug', 'alt' : 'Bug', 'image' : 'bug.svg'}, 
    {'type' : 'ghost', 'alt' : 'Ghost', 'image' : 'ghost.svg'},
    {'type' : 'rock', 'alt' : 'Rock', 'image' : 'rock.svg'},
    {'type' : 'ground', 'alt' : 'Ground', 'image' : 'ground.svg'},
    {'type' : 'poison', 'alt' : 'Poison', 'image' : 'poison.svg'},
    {'type' : 'flying', 'alt' : 'Flying', 'image' : 'flying.svg'},
    {'type' : 'fighting', 'alt' : 'Fighting', 'image' : 'fighting.svg'},
    {'type' : 'normal', 'alt' : 'Normal', 'image' : 'normal.svg'},
];

const PokemonTypeList = () => {
    return (
        <nav className='type-list'>
            {pokemonTypes.map((type, index) => (
                <TypeIcon key={index} {...type} />
            ))}
        </nav>
    );
};

export default PokemonTypeList;
