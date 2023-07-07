import React, { useEffect, useState } from "react";
import "./Inventario.css";
import { getData } from "../../firebase/api";
import Masonry from "react-masonry-css";
import {
  Card,
  CardContent,
  CardHeader,
  Collapse,
  IconButton,
  Typography,
  CardMedia,
} from "@mui/material";
import { ExpandMore as ExpandMoreIcon } from "@mui/icons-material";

const Inventario = () => {
  
  const [expanded, setExpanded] = useState({});
  const [filter, setFilter] = useState('')
  const [data, setData] = useState([]);
  
  // haciendo el fetch de la data
  const getItems = async () => {
    const querySnapshot = await getData();
    const docs = [];
    querySnapshot.forEach((doc) => {
      docs.push({ ...doc.data(), id: doc.id });
    });
    setData(docs);
  };

  useEffect(() => {
    getItems();
  }, []);


  const handleExpandClick = (id) => {
    setExpanded((prevState) => ({
      ...prevState,
      [id]: !prevState[id],
    }));
  };

  const handleChangeFiltro = (e) => {
    setFilter(e.target.value);
  };

  const filteredComponents = data.filter((datas) => {
   return datas.Articulo.toLowerCase().includes(filter.toLowerCase());
  });
  
  const negotiacion = (compra, venta) => {
    let calculo = prompt(`Ingrese el nuevo monto a negociar (monto original: RD$ ${venta})`);
    let nuevoMonto = parseFloat(calculo);
  
    if (!isNaN(nuevoMonto)) {
      let porcentajeGanancias = ((nuevoMonto - compra) / compra) * 100;
      alert(`El porcentaje de ganancias con este nuevo monto es de ${porcentajeGanancias.toFixed(2)}%
      La ganancia nueva es de RD$ ${nuevoMonto-compra}`);
    } else {
      alert("Ingrese un valor numérico válido");
    }
  }

  const comprar = (precio)=>{
    console.log(precio)
  }

  const breakpointColumnsObj = {

    default: 5,
    1920: 3,
    1200: 3,
    992: 3,
    768: 2,
    576: 1
  };

  return (
    <>
      <div className="searchContainer">
        <input
        value={filter}
          onChange={handleChangeFiltro}
          type="text"
          className="searchBar"
          placeholder="Buscar articulos"
        />
      </div>

      <div className="cartContainer" >
        <Masonry
          breakpointCols={breakpointColumnsObj}
          className="my-masonry-grid"
          columnClassName="my-masonry-grid_column">
          
          {filteredComponents.map((item) => (
            
            <Card
              sx={{ borderRadius: "20px"}}
              key={item.id}
              className="tarjeta"
            >
              <CardHeader
                title={item.Articulo}
                action={
                  <IconButton onClick={() => handleExpandClick(item.id)}>
                    <ExpandMoreIcon />
                  </IconButton>
                }
              />
              {item.imageLink && (
                <CardMedia
                  className="imagen-telefono"
                  component="img"
                  alt="Imagen del artículo"
                  height="200"
                  image={item.imageLink}
                />
              )}
              <Collapse in={expanded[item.id]} timeout="auto" unmountOnExit>
                <CardContent>

                  <Typography variant="body1" fontWeight='bold' gutterBottom>
                    Descripción:
                    <p className="contenido">{item.Description}</p>
                  </Typography>

                  <Typography variant="body1" fontWeight='bold' gutterBottom>
                    Precio de compra:
                    <p className="contenido">{item.PrecioCompra}</p>
                  </Typography>

                  <Typography variant="body1" fontWeight='bold' gutterBottom>
                    Precio de venta:
                    <p className="contenido">{item.PrecioVenta}</p>
                  </Typography>

                  <Typography variant="body1" fontWeight='bold' gutterBottom>
                    Porcentaje de ganancias:
                    <p className="contenido">{((item.PrecioVenta-item.PrecioCompra)/item.PrecioCompra*100).toFixed(0)}% {'-'} RD$ {item.PrecioVenta-item.PrecioCompra}</p>
                  </Typography>
                  <div className="buttonContainer">
                    <button onClick={()=>{negotiacion(item.PrecioCompra,item.PrecioVenta)}}>NEGOCIAR MONTO</button>
                    <button onClick={()=>{comprar(item.PrecioVenta)}}>comprar</button>
                  </div>
                </CardContent>
              </Collapse>
            </Card>
          ))}
          
        </Masonry>
        {filteredComponents.length === 0 &&(
          <div className="container2">
            <h1 className="length0">ESTE PRODUCTO AUN NO EXISTE</h1>
            <div  className="deseasAgregarlo"> <a href="/mantenimiento">DESEAS AGREGARLO?</a> </div>
            </div>
          )}
      </div>
    </>
  );
};

export default Inventario;
