//imports react library
import React from 'react'
//creates the function title that takes props from App.js as a parameter
function Title({props}) {
//asign needed elements from the json to a variable
    const name = props.name
    const location = props.location
    const number = props.number
    const email = props.email

    return <>
    <h1>{name} </h1> 
    {/* //prints each variable inside html elements  */}
    <p className = "contactinfo">{location}</p>
    <p className = "contactinfo">{number}</p>
    <p className = "contactinfo">{email}</p>
    </>
  }
//exports component as  Title
export default Title;