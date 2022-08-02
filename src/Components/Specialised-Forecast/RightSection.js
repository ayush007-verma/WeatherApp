import React from 'react'

export const RightSection = () => {
    return (
        <>
          <input type="text" id="searchBox" style={{height:"8vh",
                                                    width:"30vw",
                                                    backgroundColor: "inherit",
                                                    color:"red",
                                                    border:0,
                                                    borderBottom:"2px solid white",
                                                    fontSize:"1.5rem"}}/>
          <button  style={{width:"5vw",
                          height:"8vh",
                          fontSize:"1rem"
                          }}>Search</button>  
        </>
    )
}
