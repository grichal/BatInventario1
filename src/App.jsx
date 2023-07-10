import React from "react"
import { BrowserRouter,Routes,Route,HashRouter} from "react-router-dom";
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
      <HashRouter basename="/">
      <Routes>
        <Route path="/" element={<Inventario/>}></Route>
        <Route path="/mantenimiento" element={<Mantenimiento/>}></Route>
        <Route path="/test" element={<Carousel/>}/>
      </Routes>
      </HashRouter>
      <ToastContainer/>
      </div>
  )
}

export default App
