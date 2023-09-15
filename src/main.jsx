import ReactDOM from 'react-dom/client'
import Home from './Routes/Home'
import Favs from './Routes/Favs'
import Contact from './Routes/Contact'
import './index.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { DentistProvider } from './Context/globalContext'

ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <DentistProvider>
      <Routes>
        <Route path="/"element={<Home/>}/>
        <Route path="/favs"element={<Favs/>}/>
        <Route path="/contact"element={<Contact/>}/>
      </Routes>
    </DentistProvider>
  </BrowserRouter>
  
)
