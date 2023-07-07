import React from "react"
import { BrowserRouter,Routes,Route,} from "react-router-dom";
import Inventario from "./components/inventario/Inventario";
import Mantenimiento from "./components/mantenimiento/Mantenimiento";
import Navi from "./components/nav/Nav";
import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import Carousel from "./components/test/test";

function App() {
 
  return (
    <div>
      <Navi/>
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<Inventario/>} exact></Route>
        <Route path="/mantenimiento" element={<Mantenimiento/>} exact></Route>
        <Route path="/test" element={<Carousel/>} exact/>
      </Routes>
      </BrowserRouter>
      <ToastContainer/>
      </div>
  )
}

export default App
