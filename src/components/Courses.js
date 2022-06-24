import React from 'react'

function Courses({props}) {

    const course = props.courses
    return <>

    <h3>Courses</h3>
          {course.map(({course}) => (
            <><li>{course}</li></>
          ))}
    </>
  }

export default Courses;