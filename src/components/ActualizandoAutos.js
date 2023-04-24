import React from "react";
import { useLocalStorage } from "./useLocalStorage";

function actualizandoAutos({plate,name,registerDate,setListaAutos,listaAutos}){
    const {
      item,
      saveItem
    } = useLocalStorage('CONDUCTORES_V1',[]);
  
    setListaAutos([...listaAutos, {
      plate,
      name,
      registerDate
    }])
  
    saveItem(listaAutos);
  
    setError(false);
    
    return { 
      item
    };
}

export { actualizandoAutos };