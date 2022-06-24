import React from 'react'

function Education({props}) {

    const education = props.education
    return <>
        <h3>Education</h3>
          {education.map(({institution, degree, coursework }) => (
            <><div class="elementcontainer"> <h4>{institution}</h4>{" "}<h4>{degree}</h4>{" "}<p>{coursework}</p></div></>
          ))}
    </>
  }

export default Education;