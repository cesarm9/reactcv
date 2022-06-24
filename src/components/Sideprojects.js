import React from 'react'

function Sideprojects({props}) {

    const sideprojects = props.sideprojects
    return <>
    <h3>Side projects:</h3> 
    <p >{sideprojects}</p> 
    </>
  }

export default Sideprojects;