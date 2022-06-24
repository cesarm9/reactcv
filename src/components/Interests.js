import React from 'react'

function Interests({props}) {

    const interests = props.interests
    return <>
    <h3>Interests</h3>
          {interests.map(({interest }) => (
            <><li>{interest}</li></>
          ))}
    </> 
  }

export default Interests;