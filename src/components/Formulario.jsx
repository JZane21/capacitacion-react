import { BottonRegistrar } from "./BottonRegistrar"

export const Formulario = () => {
  let boleano = false;
  
  const cambioDatos = (elemento) => {
    if(elemento.target.value==="" || elemento.target.value===undefined){
      alert("string");
      boleano = false;
    }else{
      alert("numero");
      boleano = true;
    }
  };

  return (
    <div className="md:w-1/2">
      <h3 className="font-bold text-3xl text-center"> Control Parqueo </h3>
      <p className="text-lg text-center mt-4">
        Control Vehicular
      </p>
      <form className="grid bg-white p-10 rounded-lg shadow-lg ml-10 mr-5 mt-2">
        <label className="font-bold">
          Numero Placa
        </label>
        <input className="border-2 w-full mt-1" type="text" />

        <label className="font-bold">
          Nombre Conductor
        </label>
        <input className="border-2 w-full mt-1" type="text" />

        <label className="font-bold">
          Fecha Ingreso
        </label>
        <input className={`
        border-2
        w-full
        mt-1
        ${!boleano && "text-white" & "text-black"}
        `}
        onChange={cambioDatos}
        type="date" 
        />
        <BottonRegistrar/>
      </form>

    </div>
  )
}
