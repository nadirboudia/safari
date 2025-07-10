
import "./Pagination.css"

function Pagination({   pages, currentPage, setCurrentPage }) {

const generatePages =[];
for(let i = 1 ; i<=pages ; i++){
  generatePages.push(i)
}

  return (
    <div className="Pagination">

      <button disabled={currentPage === 1} onClick={()=>{
        setCurrentPage(prev => prev -1)
      }} className="prev">
        prevent 
      </button>
      {generatePages.map(page => 
      <div  onClick={()=> {
        setCurrentPage(page)
      }} key={page} className={currentPage ===page ? " page active" : "page"}>
        {page}
       </div>

      )}

      <button disabled={currentPage === pages} onClick={()=>{
        setCurrentPage( prev => prev +1 )
      }} className="Next">
        Next
       </button>

    </div>
  )
}

export default Pagination
