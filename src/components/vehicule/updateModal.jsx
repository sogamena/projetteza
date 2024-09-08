import { useContext, useEffect } from "react";
import { ContextModal, ContextReload } from "../../context/context";
import { useParams } from "react-router-dom";
import axios from "axios";
import { toast } from "react-toastify";

const UpdateModal = ()=>{
    const [reload,setReload] = useContext(ContextReload);


    const [modalState,setModal] = useContext(ContextModal);
    console.log(modalState.detail);
    const id = useParams().id
    console.log(id);

    const UpdateFormation = (e)=>{
        e.preventDefault()
        console.log(e.target);
        const formData = new FormData(e.target)
        console.log(formData.get("title"));
        const data = {}
        formData.forEach((value,key)=>{
            console.log(value,key);
            data[key] = value
        })
        console.log(data);
        console.log(JSON.stringify(data));
        
        // fetch(`http://localhost:5173/api/formation/${id}`,{
        //     method:"PATCH",
        //     headers:{"Content-Type":'application/json'},
        //     body:JSON.stringify(data)
        // })
        // .then(rep=>console.log(rep))
        // .catch(error=>console.log(error))
        try {
            axios.patch(`http://localhost:5173/api/formation/${id}`,data)
            toast.success("mise à jour effectuée")
            // setTimeout(()=>{
            //     window.location.reload()
            // },1000)
            setReload(!reload)
            setModal({status:false,target:""})
            
        } catch (error) {
            console.log(error);
        }
        
    }
 
    return (
        <div className="update-modal">
            <button className="close-modal" onClick={()=>setModal({status:false,target:""})}>close</button>
            <h3>update : {modalState.detail.title} </h3>
            <div className="box-formation">
                <img src={`/images/formation/${modalState.detail.image}`} alt="" />
                <form onSubmit={UpdateFormation}>
                    <label htmlFor="title">Titre :</label>
                    <input type="text" defaultValue={modalState.detail.title} id="title" name="title"/>
                    <label htmlFor="niveau">Niveau :</label>
                    <select id="niveau" defaultValue={modalState.detail.niveau} name="niveau">
                        <option value="debutant">debutant</option>
                        <option value="avancé">avancé</option>
                    </select>
                    <label htmlFor="describe">Description :</label>
                    <textarea cols="30" rows="5" defaultValue={modalState.detail.describe} id="describe" name="describe"></textarea>
                    <button>update</button>
                </form>
            </div>
        </div>
    )
}
export default UpdateModal