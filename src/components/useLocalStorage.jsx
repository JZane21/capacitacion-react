import React, {useState} from 'react'

function useLocalStorage (itemName, initialValue) {

    // inicializando una variable para el useState
    const [item, setItem] = useState(initialValue);

    // obteniendo el valor de un item del localStorage
    const localStorageItem = localStorage.getItem(itemName);

    let parsedItem;

    // guardando un nuevo item en el local storage si este no existe
    // si existe, lo actualiza
    if(!localStorageItem){
        localStorage.setItem(itemName, JSON.stringify(initialValue));
        parsedItem = initialValue;
    }else{
        parsedItem = JSON.parse(localStorageItem);
    }

    // guardando el valor de localStorage
    setItem(parsedItem);

    const saveItem = (newItem) => {
        const stringified = JSON.stringify(newItem);
        localStorage.setItem(itemName, stringified);
        setItem(newItem);
    };
    
    return {
        item,
        saveItem
    };
}

export { useLocalStorage }