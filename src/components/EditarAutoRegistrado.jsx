import React, { useState } from 'react'
import { ButtonTypeOne } from './ButtonTypeOne';
import { Error } from './Error';

export const EditarAutoRegistrado = (props) => {
    const {name,plate,registerDate} = props.person;
    const listaAutos = props.listaAutos;
    const setListaAutos = props.setListaAutos;
    const setOpenModal = props.setOpenModal;

    const [_name,_setName] = useState(name);
    const [_plate,_setPlate] = useState(plate);
    const [_registerDate,_setRegisterDate] = useState(registerDate);
    const[error,setError] = useState(false);

    const handleSubmit = (evento) => {
        evento.preventDefault();
        if(![_name,_plate,_registerDate].includes('')){
            const nuevaLista = [...listaAutos];
            const index = listaAutos.findIndex(conductor => conductor.plate === plate);
            nuevaLista[index].plate = _plate;
            nuevaLista[index].name = _name;
            nuevaLista[index].registerDate = _registerDate;
            setListaAutos(nuevaLista);
            setOpenModal(false);
            setError(false);
        }else{
            setError(true);
        }

    };

    const cerrarModal = () => {
        setOpenModal(false);
    }

    return (
        <section className='
        flex
        h-screen
        w-screen
        fixed
        justify-center
        bg-slate-800
        items-center
        pb-11
        '>
            
            <form className='
            grid
            bg-white
            p-8
            rounded-lg
            shadow-lg
            '
            onSubmit={handleSubmit}
            >
                <h1 
                className='
                font-bold
                mb-3
                text-2xl
                '>
                    Editando conductor
                </h1>

                <Error
                errorApp = "No puede dejar espacios en blanco"
                error={error}
                />

                <label className="font-bold">
                Numero Placa
                </label>
                <input
                className="border-2 w-full mt-1 mb-3"
                type="text"
                placeholder="5719HHP"
                value={_plate}
                onChange={(evento) => _setPlate(evento.target.value)}
                />

                <label className="font-bold">
                Nombre Conductor
                </label>
                <input
                className="border-2 w-full mt-1 mb-3"
                type="text"
                placeholder="nombre"
                value={_name}
                onChange={(evento) => _setName(evento.target.value)}
                />

                <label className="font-bold">
                Fecha Ingreso
                </label>
                <input className="
                border-2
                w-full
                mt-1
                mb-3
                "
                type="date"
                value={_registerDate}
                onChange={(evento) => _setRegisterDate(evento.target.value)}
                />

                <div className='flex flex-row'>
                <input className="
                    relative
                    bg-indigo-500
                    rounded-lg
                    p-2
                    pb-3
                    font-bold
                    mt-3
                    hover:bg-indigo-700
                    active:bg-indigo-300
                    text-white
                    cursor-pointer
                    uppercase
                    "
                    type="submit"
                    value="editar"
                    />
                    <ButtonTypeOne
                    tipoSimbolo="eliminar"
                    accion={cerrarModal}
                    />
                </div>
            </form>
        </section>
    );
}
