// import { FaUbuntu, FaTwitter } from "react-icons/fa";
import { FiEdit2 } from "react-icons/fi";
import { AiFillDelete } from "react-icons/ai";
export const ButtonTypeOne = (props) => {
    const tipoSimbolo = props.tipoSimbolo.toLowerCase();
    const accion = props.accion;
    return (
    <button
    className="
    relative
    rounded-lg
    p-2
    pb-2
    font-bold
    mt-3
    ml-2
    mr-2
    bg-indigo-500
    hover:bg-indigo-700
    active:bg-indigo-300
    text-white

    "
    onClick={accion}
    >
        {tipoSimbolo === "editar" && <FiEdit2/>}
        {tipoSimbolo === "eliminar" && <AiFillDelete/>}
    </button>
  )
}
