
function Selectbox({items=[] , label}) {
  return (
       <div className="selected">
          <div className="box">
            <label htmlFor="" className="select-box-label">
            {label}:  
           </label>
          <select className="select-box-input" name="select-box-input" id="">
            {items.map((item) => (
              <option className="op" key={item.id}>{item.value}</option>
            ))}
          </select>
          </div>

          

        </div>
  )
}

export default Selectbox
