import { Card } from "./Card";
export const Auto = (props) => {

  // forma 1
  // const listaAutos = props.listaAutos;

  // forma 2
  const {listaAutos} = props;

  return (
    <div className="md:w-1/2 overflow-y-scroll">
      <h3 className="font-bold text-3xl text-center">Lista Autos</h3>
      <p className="text-lg text-center mt-4">
        Auto Registrado
      </p>
      { listaAutos.map(conductor => (
        <Card person={conductor} key={conductor.plate}/>
      )) }
    </div>
  );
};
