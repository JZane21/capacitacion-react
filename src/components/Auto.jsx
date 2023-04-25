import { useEffect } from "react";
import { Card } from "./Card";
import { useLocalStorage } from "./useLocalStorage";
// import { useLocalStorage } from './useLocalStorage'
export const Auto = (props) => {

  // forma 1
  // const listaAutos = props.listaAutos;

  // forma 2
  const listaAutos = props.listaAutos;
  const setListaAutos = props.setListaAutos;
  const setOpenModal = props.setOpenModal;
  const openModal = props.openModal;
  const setConductorAEditar=props.setConductorAEditar;

  useEffect(() => {
    const {
      item,
      saveItem
    } = useLocalStorage('BD_1',[]);
  },[])

  return (
    <div className="md:w-1/2 overflow-y-scroll">
      <h3 className="font-bold text-3xl text-center">Lista Autos</h3>
      <p className="text-lg text-center mt-4">
        Auto Registrado
      </p>
      { listaAutos.map(conductor => (
        <Card
        person={conductor}
        listaAutos={listaAutos}
        setListaAutos={setListaAutos}
        openModal={openModal}
        setOpenModal={setOpenModal}
        setConductorAEditar={setConductorAEditar}
        key={conductor.plate}/>
      )) }
    </div>
  );
};
