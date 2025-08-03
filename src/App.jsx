import { Route, Routes } from 'react-router'
import './App.css'
import Header from './components/Header'
import Categories from './Pages/Categories'
import Home from './Pages/Home'
import Services from './Pages/Services'

function App() {
  return (
    <>
    <Header/>
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/categories' element={<Categories/>} />
        <Route path='/services' element={<Services/>} />

      </Routes>
    </>
  )
}

export default App
