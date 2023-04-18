import { ButtonTypeOne } from "./ButtonTypeOne";

export const Card = (props) => {

  const {name,plate,registerDate} = props.person;

  const mensajeEditar = () => {
    alert("EDITANDO");
  };

  const mensajeEliminando = () => {
    alert("ELIMINANDO");
  };

  return (
    <div className="
    min-h-max 
    border-solid
    mt-2
    bg-white
    m-2
    shadow-lg
    ml-10
    mr-5
    p-5
    rounded-lg
    ">

      <p className="font-bold uppercase text-gray-600">
        Conductor: {" "}
        <span className="font-normal normal-case">{name}</span>
      </p>
      <p className="font-bold uppercase text-gray-600">
        Placa: {" "}
        <span className="font-normal normal-case">{plate}</span>
      </p>
      <p className="font-bold uppercase text-gray-600">
        Fecha: {" "}
        <span className="font-normal normal-case">{registerDate}</span>
      </p>

      <div  className="flex flex-row-reverse">
        <ButtonTypeOne 
          tipoSimbolo="editar"
          accion={mensajeEditar}
        />

        <ButtonTypeOne 
          tipoSimbolo="eliminar"
          accion={mensajeEliminando}
        />
      </div>

    </div>
  );

};