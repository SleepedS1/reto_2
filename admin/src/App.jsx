import { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import FormLogin from './assets/FormLogin';
import NavAdmin from './assets/NavAdmin';
import GestionVuelos from './assets/GestionVuelos';

function App() {
  // const [count, setCount] = useState(0)

  return (
    <>
      <BrowserRouter>
        <FormLogin />
        <NavAdmin />
        <Routes>
          <Route path="/GestionVuelos" element={<GestionVuelos />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App;
