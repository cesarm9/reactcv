import React from 'react'

function Summary({props}) {

    const summary = props.summary
    return <>
    <h3>Professional Experience:</h3>
    <p>{summary} </p>
    </>
  }

export default Summary;