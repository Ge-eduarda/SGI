import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Login from './pages/Login'
import './shared/tailwind.css'
import Home from './pages/Home'
import NovaEdicao from './pages/NovaEdicao'
import Edicao from './pages/Edicao'


function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Login />} />
          <Route path='/home' element={<Home />} /> 
          <Route path='/NovaEdicao' element={<NovaEdicao />} />
          <Route path='/Edicao' element={<Edicao />}/>
        </Routes> 
      </BrowserRouter>
    </>
  )
}

export default App
