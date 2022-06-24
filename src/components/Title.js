import React from 'react'

function Title({props}) {

    const name = props.name
    const location = props.location
    const number = props.number
    const email = props.email

    return <>
    <h1>{name} </h1> 
    <p className = "contactinfo">{location}</p>
    <p className = "contactinfo">{number}</p>
    <p className = "contactinfo">{email}</p>
    </>
  }

export default Title;