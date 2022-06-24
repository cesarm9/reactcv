import React from 'react'

function Experience({props}) {


        
    const experience = props.experience

    return (
        <>
        <h3>Experience</h3>
          {experience.map(({ company, position,description }) => (
            <> <div class="elementcontainer"><h4>{company}</h4>{" "}<h4>{position}</h4>{" "}<p>{description}</p></div></>
          ))}
        </>
      );
  }

export default Experience;