import './App.css'
import { Header } from './components/Header'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { List } from './components/List'
import { Card } from './components/Card'
import { Who } from './components/Who'

function App() {


  return (
    <>
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path='/' element={<List />}/>
        <Route path='/who' element={<Who />} />
        <Route path='/pokemon/:id' element={<Card />}/>
      </Routes>
     </BrowserRouter>
    </>
  )
}

export default App
