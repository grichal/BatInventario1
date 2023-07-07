import React,{useState,useEffect} from "react";
import './Form.css'
import { getdoc } from "../../firebase/api";

const Formi =(props) =>{

    const initialStateValues={
        Articulo:'',
        Description:'',
        imageLink:'',
        PrecioCompra:'',
        PrecioVenta:''
    }

    const [articulo, setArticulo] = useState(initialStateValues)
    
    const handleInputChange = (e) =>{
        const {name,value} = e.target
       setArticulo({...articulo, [name]: value})
    }

    const handleSubmit = e =>{
        e.preventDefault();
        props.addOrEdit(articulo)
        setArticulo({...initialStateValues})
        }
        
        const getData = async(id)=>{
            const docSnapshot = await getdoc(id)
            const dataUp = docSnapshot.data()
            setArticulo(dataUp)
        }

        useEffect(()=>{
            console.log(props.currentId)
            if(props.currentId===""){
                setArticulo({...initialStateValues})
            }else{
                getData(props.currentId)
            }
        },[props.currentId]);

    return(
        <div className="container">
        <div className='form'>
        <form onSubmit={handleSubmit}>
            <h1 className="tituloForm">REGISTRO DE PRODUCTO</h1>
            <h2>Articulo</h2>
            <input onChange={handleInputChange} value={articulo.Articulo} name="Articulo" className="product inputs" type="text" />
            <h2>Descripcion</h2>
            <textarea onChange={handleInputChange} value={articulo.Description} name="Description" className="desc inputs" type="text"/>
            <h2>Precio de compra</h2>
            <input onChange={handleInputChange} value={articulo.PrecioCompra} name="PrecioCompra" className="bprice inputs" type="text" />
            <h2> Precio de venta</h2>
            <input onChange={handleInputChange} value={articulo.PrecioVenta} name="PrecioVenta" className="sprice inputs" type="text"/>
            <h2> Link de la imagen</h2>
            <input onChange={handleInputChange} value={articulo.imageLink} name="imageLink" className="link inputs" type="text"/>
            
            <button className={props.currentId==='' ?'GUARDAR':'ACTUALIZAR'}> {props.currentId==='' ?'GUARDAR':'ACTUALIZAR'}</button>
            </form></div></div>
    )
}

export default Formi