import React from 'react'
import { useGlobalContext } from './Context'

const Search = () => {
  const {query,searchpost} = useGlobalContext();
  return (
    <>
     <h1>My Tech News post</h1>
  <form onSubmit={(e)=>e.preventDefault()} >
    <div>
      <input type="text" placeholder='Search here' value={query} onChange={(e)=>searchpost(e.target.value)} />
    </div>
  </form>
    
    
    </>

    )
}

export default Search