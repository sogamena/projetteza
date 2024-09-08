const Paginate = ({propsNbrVehicule,propsDataPerPage,propsSetCurrentPage,propsCurrentPage})=>{
    let pages = []
    for (let i = 1; i <= Math.ceil(propsNbrVehicule/propsDataPerPage); i++) {
        pages.push(i)
    }
    return (
        <div className="paginate">
            <h6>page :</h6>
            {
                pages.map((page,i) => 
                    <button key={i} onClick={()=>propsSetCurrentPage(page)} className={page == propsCurrentPage ? "page-active" : ""}>{page}</button>
                )
            }
        </div>
    )
}
export default Paginate