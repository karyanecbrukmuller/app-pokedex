import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import PokemonPage from './pages/PokemonPage';

function App() {
  return (
    <BrowserRouter>
      <Routes>
          <Route path='/' element={<HomePage />}></Route>
          <Route path='/pokemon/details/:id' element={<PokemonPage />}></Route>
          <Route path='*' element={<HomePage />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
