import { Routes, Route } from 'react-router-dom';
import { useState } from 'react';
import Google from './pages/Google';
import Search from './pages/Search';
import Footer from './components/Footer';
import './App.css';

function App() {
  const API_KEY = import.meta.env.VITE_API_KEY;
  const API_CX = import.meta.env.VITE_API_CX;

  const [query, setQuery] = useState("");

  function handleInput(event) {
    setQuery(event.target.value);
  }

  return (
    <div className="app">
      <Routes>
        <Route 
          exact path="/" 
          element={<Google query={query} handleInput={handleInput} />} 
        />
        <Route 
          path="/search" 
          element={<Search query={query} setQuery={setQuery} handleInput={handleInput} apiKEY={API_KEY} apiCX={API_CX} />} 
        />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
