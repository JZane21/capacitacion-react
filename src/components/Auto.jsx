import { Card } from "./Card";
export const Auto = () => {

  const drivers = [
    {
      name: "Paul Landaeta",
      plate: "5719HHP",
      registerDate: "13/04/2023 7:45 am"
    },
    {
      name: "Pablo Acker",
      plate: "5342WHP",
      registerDate: "13/04/2023 12:45 pm"
    }
  ];

  return (
      <div className="md:w-1/2 overflow-y-scroll">
        <h3 className="font-bold text-3xl text-center">Lista Autos</h3>
        <p className="text-lg text-center mt-4">
          Auto Registrado
        </p>
        { drivers.map(conductor => (
          <Card person={conductor} key={conductor.plate}/>
        )) }
      </div>
  );
};
