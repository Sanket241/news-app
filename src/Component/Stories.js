import React from 'react'
import './App.css'
import { useGlobalContext } from './Context'

const Stories = () => {
    // const {hits} = useGlobalContext();

    const { hits, isloading,removepost } = useGlobalContext();
    if (isloading) {
        return (
            <>
                <h1>Loading....</h1>
            </>
        )
    }
    return (

        <>

           
            <div className="stories-div">

            {hits.map((currpost) => {
                const { title, author, objectID, url, num_comments } = currpost;
                return (
                    
                    
                        <div className="card" key={objectID}>
                            <h2>{title}</h2>
                            <p>
                                By  <span>{author} 2</span> | <span> {num_comments} </span>Coments

                            </p>
                            <div className="card-button">
                                <a href={url} target="_blank">
                                    Read More
                                </a>
                                <a href="#" onClick={()=>removepost(objectID)}>Remove</a>
                            </div>
                        </div>
                    
                )
            })}

            </div>
        </>
    )
}

export default Stories