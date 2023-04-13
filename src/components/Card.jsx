export const Card = (props) => {

  const {name,plate,registerDate} = props.person;

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
    </div>
  );
};
