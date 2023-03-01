import { Routes, Route, Outlet } from "react-router-dom"
// import Agenda from "./Agenda"
import Home from './paginas/Home'
import Movie from './paginas/Filme'
import Busca from './paginas/Busca'

import Filme from './components/Filme'

import BarraNavegacao from './components/BarraNavegacao'

function App() {
  return (
    <Routes> 
      <Route path="/" element={<Home />} />
      <Route path="movie/:id" element={<Movie />} />
      <Route path="search" element={<Busca />} />
    </Routes>
  )
}

export default App