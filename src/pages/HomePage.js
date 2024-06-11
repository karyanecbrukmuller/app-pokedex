import React from 'react';
import Header from '../components/Header/Header';
import PokemonTypeList from '../components/PokemonTypeList/PokemonTypeList';
import PokemonsContainer from '../components/PokemonsContainer/PokemonsContainer';

const HomePage = () => {
  return (
    <div className='Wrapper'>
      <div className="App">
        <Header />
        <PokemonTypeList />
        <PokemonsContainer />
      </div>
    </div>
  );
};

export default HomePage;
