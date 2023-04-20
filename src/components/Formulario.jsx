import { useState } from "react";
import { BottonRegistrar } from "./BottonRegistrar"

export const Formulario = (props) => {

  const {listaAutos,setListaAutos} = props;

  const[plate,setPlate] = useState('');

  const[name,setName] = useState('');

  const[registerDate,setRegisterDate] = useState('');

  const handleSubmit = (evento) => {
    // haciendo que la app no cruce el camino antes de mirar
    evento.preventDefault();
    setListaAutos([...listaAutos,{
      plate,
      name,
      registerDate
    }]);
  };

  return (
    <div className="md:w-1/2">
      <h3 className="font-bold text-3xl text-center"> Control Parqueo </h3>
      <p className="text-lg text-center mt-4">
        Control Vehicular
      </p>
      <form className="grid bg-white p-10 rounded-lg shadow-lg ml-10 mr-5 mt-2"
      onSubmit={handleSubmit}
      >
        <label className="font-bold">
          Numero Placa
        </label>
        <input
        className="border-2 w-full mt-1"
        type="text"
        placeholder="5719HHP"
        value={plate}
        onChange={(evento) => setPlate(evento.target.value)}
        />

        <label className="font-bold">
          Nombre Conductor
        </label>
        <input
        className="border-2 w-full mt-1"
        type="text"
        placeholder="nombre"
        value={name}
        onChange={(evento) => setName(evento.target.value)}
        />

        <label className="font-bold">
          Fecha Ingreso
        </label>
        <input className="
        border-2
        w-full
        mt-1
        "
        type="date"
        value={registerDate}
        onChange={(evento) => setRegisterDate(""+evento.target.value)}
        />
        <BottonRegistrar/>
      </form>

    </div>
  )
}
