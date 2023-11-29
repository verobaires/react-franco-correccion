import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css'
import Nav from './Nav';
import Gestion from './Gestion'
import Formulario from './Formulario';
import ListaPociones from './ListaPociones';


//borre <> </>
function App() {
  return (
 
  <Router>
     <Nav/>
   {/*    <Gestion /> */}
   <main>
      <Routes>
        <Route path='/' element={<Gestion/>} />
        <Route path='/productos' element={<ListaPociones />} />
        <Route path='/productos' element={<Formulario />} />
        {/* <Route path='/carrito' element={<div>CARRITO</div>} /> */}
      </Routes>
      </main>
    </Router>
   
  )
}
export default App
