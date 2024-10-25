import React from "react"
import { BrowserRouter,Routes,Route,HashRouter} from "react-router-dom";
import Inventario from "./components/inventario/Inventario";
import Mantenimiento from "./components/mantenimiento/Mantenimiento";
import Navi from "./components/nav/Nav";
import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';


function App() {
 
  return (
    
    <div>
      <Navi/>

      <BrowserRouter>
      <Routes>
        <Route path="/" element={<Inventario/>}exact></Route>
        <Route path="/mantenimiento" element={<Mantenimiento/>}exact></Route>
      </Routes>
      </BrowserRouter>
      <ToastContainer/>
      </div>
      
  )
}

export default App
