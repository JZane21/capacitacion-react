// import { BsPencilSquare,BsFillTrashFill } from "react-icons/fa";
import { FiCheck, FiX } from "react-icons/fi";
export const ButtonTypeOne = (props) => {
    const tipoSimbolo = props.tipoSimbolo.toLowerCase();
    const accion = props.accion;
    return (
    <button
    className="
    relative
        border-black
        border-2
        rounded-lg
        p-2
        pb-2
        font-bold
        mt-3
        ml-2
        mr-2
    "
    onClick={accion}
    >
        {tipoSimbolo === "editar" && <FiCheck/>}
        {tipoSimbolo === "eliminar" && <FiX/>}
    </button>
  )
}
