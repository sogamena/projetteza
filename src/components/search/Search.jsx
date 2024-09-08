import { useContext, useRef, useState } from "react";
import { ContextFirstPage, ContextVehicule, ContextReload } from "../../context/context";

const Search = ({propsCopyVehicule})=>{
    const [Vehicule,setVehicule] = useContext(ContextVehicule);
    const [reload,setReload] = useContext(ContextReload);

    const [firstPage,setFirstPage] = useContext(ContextFirstPage);


    const inputSearchRef = useRef(null)
    const [Result, setResult] = useState(null);

    const SearchVehicule = (e)=>{
        e.preventDefault()
        setFirstPage(!firstPage)
        
        console.log("oki");
        console.log(inputSearchRef.current.value);
        const dataVehicule = propsCopyVehicule.filter((vehicule)=>((vehicule.title).toLowerCase()).includes((inputSearchRef.current.value).toLowerCase()))
        console.log(dataVehicule);
        if(inputSearchRef.current.value.length !=0){
            setResult(`${dataVehicule.length} résultat(s) sur: "${inputSearchRef.current.value}"`)
            setVehicule(dataVehicule)
        }
    }
    const InputSearchFn = ()=>{
        if(inputSearchRef.current.value.length ==0){
                setReload(!reload)
                setResult(null)
        }

    }
    return (
        <div className="search-fomation">
            <form>
                <input type="search" placeholder="Search" ref={inputSearchRef} onChange={InputSearchFn}/>
                <button onClick={SearchVehicule}>Search</button>
            </form>       
            <h6>{Result}</h6>
        </div>
    )
}
export default Search