import React from 'react'
import { useGlobalContext } from './Context'

const Pagination = () => {
  const {nbPages,page,getPrevPage,getNextPage} = useGlobalContext();
  return (
<>
<div className="pagination-btn">
  <button onClick={()=>getPrevPage()}>PrevPage</button>
  <p>
    {page +1} of {nbPages}
  </p>
  <button onClick={()=>getNextPage()}>NextPage</button>
</div>


</>


    )
}

export default Pagination