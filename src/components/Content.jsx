import React, {Fragment, useState} from 'react'
import { Formulario } from './Formulario'
import { Auto } from './Auto'
import { EditarAutoRegistrado } from "./EditarAutoRegistrado";

export const Content = () => {

  // const drivers = [
  //   {
  //     name: "Paul Landaeta",
  //     plate: "5719HHP",
  //     registerDate: "13/04/2023 7:45 am"
  //   },
  //   {
  //     name: "Pablo Acker",
  //     plate: "5342WHP",
  //     registerDate: "13/04/2023 12:45 pm"
  //   }
  // ];

  const [listaAutos, setListaAutos] = useState([]);
  const [openModal, setOpenModal] = useState(false);
  const [conductorAEditar,setConductorAEditar] = useState({});

  return (
    <>
    {!openModal && (
      <div className='mt-10 md:flex'>
        <Formulario 
        listaAutos={listaAutos}
        setListaAutos={setListaAutos}/>
        <Auto
        listaAutos={listaAutos}
        setListaAutos={setListaAutos}
        openModal={openModal}
        setOpenModal={setOpenModal}
        setConductorAEditar={setConductorAEditar}
        />
      </div>
    )}
    {openModal && (
    <EditarAutoRegistrado
      setOpenModal = {setOpenModal}
      listaAutos = {listaAutos}
      setListaAutos = {setListaAutos}
      person = {conductorAEditar}
    />
    )}  
    </>
  )
}
