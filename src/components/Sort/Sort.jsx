import './Sort.css'

function Sort({ toursLength , setSort , sort}) {
  return (
    <div className='sort'>
     <div className="available-tours">
      {toursLength} Tours found <i className='bi bi-info-circle'></i>
    </div>
    <select value={sort} onChange={(e) => setSort(e.target.value)} className='list' >
    <option value="recomended"> Recomended</option>
    <option value="low"> Price - Low to high</option>
    <option value="high"> Price - High to Low</option>
    </select> 
    </div>
  )
}

export default Sort ;