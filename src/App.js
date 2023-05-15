
import './App.css';
import { Routes, Route } from 'react-router-dom'

import Navbar from './components/Navbar';
import Home from './pages/Home';
import ErrorPage from './pages/ErrorPage';
import AllBeer  from './pages/AllBeer';
import RandomBeer from './pages/RandomBeer';
import NewBeer from './pages/NewBeer';
import BeerDetails from './pages/BeerDetails';


function App() {
  return (
    <div className="App">
    <Navbar />

      <Routes>

        <Route path='/' element={<Home />} />
        <Route path='/all-beers' element={<AllBeer />} />
        <Route path='/random-beer' element={<RandomBeer />} />
        <Route path='/add-beer' element={<NewBeer />} />

        <Route path='/beer/:id' element={<BeerDetails />} />

        <Route path='*' element={<ErrorPage />} />

      </Routes>

    </div>
  );
}

export default App;
