import React from "react";
import './listado.css'
 

const Listado = ({ data, deletedoc,currentId, id })=>{
    

    return(
             <>
            {data.map((item)=>{
            return<div className="card" key={item.id}>
            <h1>Dispositivo</h1>
            <p>{item.Articulo}</p>
            <h1>Descripcion</h1>
            <p>{item.Description}</p>
            <h1>Precio de compra</h1>
            <p>{item.PrecioCompra}</p>
            <h1> precio de venta</h1>
            <p>{item.PrecioVenta}</p>
            <div className="boxButtom">
            <li className="close" onClick={()=>deletedoc(item.id)}>ELIMINAR</li>
            <li className="edit" onClick={()=>currentId(item.id)}>ACTUALIZAR</li>
            </div>
        </div>
        })
        
            }
             </>
    )
}

export default Listado