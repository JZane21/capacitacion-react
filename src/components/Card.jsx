export const Card = (props) => {
  return (
    <>
        <div className="
        min-h-max 
        border-solid
        mt-5
        bg-cyan-600
        ">
            <p>{props.conductor}</p>
            <p>{props.placa}</p>
            <p>{props.horaIngreso}</p>
        </div>
    </>
  );
};
