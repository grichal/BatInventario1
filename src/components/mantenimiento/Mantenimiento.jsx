import React, { useEffect, useReducer, useState } from "react";
import Formi from "../form/Form";
import db from "../../firebase/config";
import {collection, doc, onSnapshot} from "firebase/firestore";
import Listado from "../listaform/listado";
import { toast } from "react-toastify";
import './Mantenimiento.css';
import { adNewDevice, deleteData,getData,update } from "../../firebase/api";

const Mantenimiento = ()=>{

    const [data, setData] = useState([]);
    const [currentId, setCurrentId] = useState('')
    const [filter, setFilter] = useState('')
    
    
    const idCurrent=(id)=>{
        setCurrentId(id)
        console.log(currentId)
    }

    const onDeleteitem = async (id) => {
      if (window.confirm("are you sure you want to delete this link?")) {
        await deleteData(id);
        toast("Link Removed Successfully", {
          type: "error",
          autoClose: 2000,
        });
      }
    };

    const addOrEdit = async (articulo)=> {
          if(articulo===''){
            toast('No hay ningun dato en el formulario',{
              type:'error'
          })
          }else if(currentId===''){
            await adNewDevice(articulo)
            toast('Articulo agregado satisfactoriamente',{
                type:'succes'
            })
          }else{
            update(articulo,currentId)
            console.log('actualizado')
            toast('Articulo actualizado correctamente',{
              type:'succes'
          })
          }
    }

    // useEffect(() => {
    //     const fetchData = async () => {
    //       try {
    //         const querySnapshot = await getDocs(collection(db, 'articulos'));
    //         const newData = querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
    //         setData(newData);
            
    //       } catch (error) {
    //         console.log('there was an error trying to add new data:', error);
    //       }
    //     };

    //     fetchData();
    //     const unsubscribe = onSnapshot(collection(db, 'articulos'), (snapshot) => {
    //       const newData = snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
    //       setData(newData);
    //     });
      
    //     // Limpieza: dejar de escuchar los cambios en tiempo real al desmontar el componente
    //     return () => unsubscribe();
    //   }, [db]);
      
      const getItems = async () => {
        const querySnapshot = await getData();
        // onGetLinks((querySnapshot) => {
        const docs = [];
        querySnapshot.forEach((doc) => {
          docs.push({ ...doc.data(), id: doc.id });
        });
        setData(docs);
        // });
      };
    
      useEffect(() => {
        getItems();
        const unsubscribe = onSnapshot(collection(db, 'articulos'), (snapshot) => {
                const newData = snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
                setData(newData);
              });
              // Limpieza: dejar de escuchar los cambios en tiempo real al desmontar el componente
              return () => unsubscribe();
      }, [db]);

      const handleChangeFiltro = (e)=>{
          setFilter(e.target.value)
      }
  
      const filteredComponentsInList = data.filter((datas)=>{
          return datas.Articulo.toLowerCase().includes(filter.toLowerCase());
      })
    
    return(<>
      <div className="searchContainer">
      <input value={filter} onChange={handleChangeFiltro} type="text" className="searchBar" placeholder="Buscar articulos"/>
      </div>

        <div className="padre"> 
          <div className='hijo form'><Formi {...{addOrEdit, currentId, data }}/></div>
          <div className='hijo listado'><Listado data={filteredComponentsInList} deletedoc={onDeleteitem} currentId={idCurrent} id={currentId}/></div>
        </div>
        </>
    )
}

export default Mantenimiento