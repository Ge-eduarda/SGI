import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Login from './pages/Login'
import './shared/tailwind.css'
import Home from './pages/Home'
import NovaEdicao from './pages/NovaEdicao'
import Edicao from './pages/Edicao'
import Turmas from './pages/Turmas'


function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Login />} />
          <Route path='/Home' element={<Home />} /> 
          <Route path='/NovaEdicao' element={<NovaEdicao />} />
          <Route path='/Edicao' element={<Edicao />}/>
          <Route path='/Turmas' element={<Turmas />} />
        </Routes> 
      </BrowserRouter>
    </>
  )
}

export default App
