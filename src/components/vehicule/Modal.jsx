import { useContext } from "react";
import DeleteModal from "./deleteModal"
import UpdateModal from "./updateModal"
import { ContextModal } from "../../context/context";

const Modal = ()=>{
    const [modalState,setModal] = useContext(ContextModal);
console.log(modalState);
    return (
        <div className="modal">
            {
                modalState.target == "update" 
                ?
                <UpdateModal/>
                :
                <DeleteModal/>
            }
        </div>
    )
}
export default Modal