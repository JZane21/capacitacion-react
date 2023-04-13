export const Formulario = () => {
  return (
    <div className="md:w-1/2">
      <h3 className="font-bold text-3xl text-center"> Control Parqueo </h3>
      <p className="text-lg text-center mt-4">
        Control Vehicular
      </p>
      <form className="bg-white p-10 rounded-lg shadow-lg ml-10 mr-5 mt-2">
        <label className="font-bold">
          Numero Placa
        </label>
        <input placeholder="Ej: 5719HH" className="border-2 w-full mt-1" type="text" />

        <label className="font-bold">
          Nombre Conductor
        </label>
        <input placeholder="juanito" className="border-2 w-full mt-1" type="text" />

        <label className="font-bold">
          Fecha Ingreso
        </label>
        <input placeholder="dd/mm/yyyy" className="border-2 w-full mt-1" type="date" />
      </form>
    </div>
  )
}
