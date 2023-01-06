import { BrowserRouter, Route, Routes, } from 'react-router-dom';
import './App.css';
import Header from './Component/Header';
import Home from './Pages/Home';
import HomeAutos from './Pages/HomeAutos';

function App() {
  return (
    <div className="App">

      <BrowserRouter>

        <h1>Super Carlist</h1>

        <Header />

        <Routes>

          <Route path='/home' element={<Home />} />

          <Route path='/autos/:id' element={<HomeAutos />} />

        </Routes>
      </BrowserRouter>

    </div>
  );
}

export default App;
