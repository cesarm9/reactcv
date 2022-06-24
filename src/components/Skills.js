import React from 'react'

function Skills({props}) {

    const skills = props.skills
    return <>
    <h3>Skills:</h3> 
    <p>{skills}</p> 
    </>
  }

export default Skills;