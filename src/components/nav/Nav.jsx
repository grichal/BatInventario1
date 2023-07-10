import React from "react";
import './Nav.css'



function Navi(){

    const carrito = ()=>{
        alert('esta funcion estara disponible pronto')
    }

    return(
        <nav className="navbar">
            <div className="NavbarBrand" onClick={()=>{window.location.href='/'}}>BAT</div>
            <div className="navbarmenu">
                <div className="navbar-item"> <a href="/mantenimiento">MANTENIMIENTO</a> </div>
                <div className="navbar-item"> <a href="/">INVENTARIO</a></div>
                <div className="navbar-item"> <a onClick={carrito}>FACTURAR</a></div>
            </div>
        </nav>
    )
}

export default Navi